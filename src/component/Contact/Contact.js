import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../Redux/book/phonebook-actions";

import style from "../styles.module.css";

const СontactList = ({ contactList, onDeleted }) => {
  return (
    <ul className={"js-list"}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className={style.btnList}
              type="button"
              onClick={() => onDeleted(id)}
            >
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const getFilterContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};
const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contactList: getFilterContacts(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookActions.onDeleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СontactList);
