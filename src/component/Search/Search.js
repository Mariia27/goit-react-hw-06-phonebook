import React from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import phonebookActions from "../../Redux/book/phonebook-actions";
import style from "../styles.module.css";
function Search({ value, Search }) {
  const id = shortid.generate();
  return (
    <div className={style.containerSearch}>
      <label className={style.labelSearch} htmlFor={id}>
        Поиск контакта по имени
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={Search}
        id={id}
        className={style.inputSearch}
      ></input>
    </div>
  );
}
const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  searchContact: (e) => dispatch(phonebookActions.veluesFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
