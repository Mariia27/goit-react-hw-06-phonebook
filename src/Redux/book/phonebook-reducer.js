import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./phonebook-actions";



const contacts = createReducer([], {
    [actions.addContact]: (state, { payload }) => [payload, ...state],
    [actions.onDeleted]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
    [actions.veluesFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    contacts,
    filter,
});