import axios from 'axios';
import phoneBookActions from './phoneBookActions';

axios.defaults.baseURL = 'http://localhost:2000';

const readDB = tmp => dispatch => {
    dispatch(phoneBookActions.readDataBaseRequest());
    axios
        .get('/contacts')
        .then(response => {
            dispatch(phoneBookActions.readDataBaseSuccess(response.data))
        })
        .catch(error => dispatch(phoneBookActions.readDataBaseError(error)));
}

const addContact = text => dispatch => {
    dispatch(phoneBookActions.addContactRequest());
    axios
        .post('/contacts', { ...text })
        .then(response => {
            dispatch(phoneBookActions.addContactSucces(response.data));
            dispatch(readDB());
        })
        .catch(error => dispatch(phoneBookActions.addContactError(error)));
}

const removeContact = id => dispatch => {
    dispatch(phoneBookActions.removeContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(phoneBookActions.removeContactSuccess(id)))
        .catch(error => dispatch(phoneBookActions.removeContactError(error)));
}

export default {
    addContact,
    readDB,
    removeContact
}