// action creators
import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('Contact/addRequest');
const addContactSucces = createAction('Contact/addSuccess');
const addContactError = createAction('Contact/addError');

const readDataBaseRequest = createAction('DB/readRequest');
const readDataBaseSuccess = createAction('DB/readSuccess');
const readDataBaseError = createAction('DB/readError'); 

const removeContactRequest = createAction('contact/removeRequest');
const removeContactSuccess = createAction('contact/removeSuccess');
const removeContactError = createAction('contact/removeError', error => ({
    payload: {
        value: error
    }
}));

const updateFilter = createAction('filter/update');

export default {
    addContactRequest,
    addContactSucces,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    updateFilter,
    readDataBaseRequest,
    readDataBaseSuccess,
    readDataBaseError
};