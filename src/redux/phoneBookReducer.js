
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phoneBookActions from './phoneBookActions';

const initialValue = []

const onReadDataBase = (state, action) => (
    [...action.payload]
)

const onDeleteContact = (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
};

const onUpdateFilter = (state, action) => {
     return action.payload
};

const onError = (state, action) => {
   return action.payload
}

const phoneBookReducer = createReducer(initialValue, {
    [phoneBookActions.readDataBaseSuccess]: onReadDataBase,
    [phoneBookActions.removeContactSuccess]: onDeleteContact
})

const filterReducer = createReducer('', {
    [phoneBookActions.updateFilter]: onUpdateFilter
})

const loadingReducer = createReducer(false, {
    [phoneBookActions.addTaskRequest]: (state, action) => true,
    [phoneBookActions.addTaskSucces]: (state, action) => false,
    [phoneBookActions.addTaskError]: (state, action) => false,
})

const errorReducer = createReducer({}, {
    [phoneBookActions.removeContactError]: onError
})

const rootReducer = combineReducers({
    items: phoneBookReducer,
    filter: filterReducer,
    loading: loadingReducer,
    error: errorReducer
})

export default rootReducer;