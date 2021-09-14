import types from "./phonebook-types";
import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/addContact", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const onDeleted = createAction("phonebook/deletedContact");

const veluesFilter = createAction("phonebook/veluesFilter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, onDeleted, veluesFilter };
