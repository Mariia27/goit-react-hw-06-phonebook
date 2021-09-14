import { useState } from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import phonebookActions from "../../Redux/book/phonebook-actions";
import style from "../styles.module.css";

function Form({ contactList, onSubmit }) {
  const [newName, setName] = useState("");
  const [number, setNumber] = useState("");
  const InputValues = (evt) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const addContact = (evt) => {
    const lengthInputNemeChech = newName.length;
    const lengthInputNumberChech = number.length;
    evt.preventDefault();
    if (lengthInputNemeChech < 2 || lengthInputNemeChech > 10) {
      alert('Введіть ім"я більше 1-го символа і не більше 10');
      return;
    }
    if (lengthInputNumberChech < 7 || lengthInputNumberChech > 10) {
      alert("Введіть номер більше 7-ми цифр і не більше 10");
      return;
    }

    onSubmit(newName, number, contactList);
    resetInputValues();
  };

  const resetInputValues = () => {
    setName("");
    setNumber("");
  };

  const idName = shortid.generate();
  const idNumber = shortid.generate();
  return (
    <form className={style.form} onSubmit={addContact}>
      <label htmlFor={idName} className={style.labelName}>
        Им'я
      </label>
      <input
        id={idName}
        type="text"
        name="name"
        value={newName}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <label htmlFor={idNumber} className={style.labelNumber}>
        Номер
      </label>
      <input
        id={idNumber}
        placeholder="(0xx) xxx-xx-xx"
        type="tel"
        pattern="^[ 0-9]+$"
        name="number"
        value={number}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <button className={style.btnForm} type="submite">
        Додати контакт
      </button>
    </form>
  );
}

const onCheckName = (contactList, newName) => {
  return contactList.some(({ name }) => name === newName);
};

const mapStateToProps = (state) => ({
  contactList: state.phonebook.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newName, number, contactList) => {
    if (onCheckName(contactList, newName)) {
      alert('Це ім"я вже існує');
      return;
    }
    dispatch(phonebookActions.addContact(newName, number));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
