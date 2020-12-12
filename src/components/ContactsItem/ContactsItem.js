import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Contacts/Contacts.module.css';

const ContactsItem = ({key, name, number, onDeleteContact}) => (
    <li key={key} className={styles.item} >
        {name}: {number}
        <button
            className={styles.buttonDelete}
            id={key}
            onClick={onDeleteContact}
        >X
        </button>
    </li>
)

ContactsItem.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}

export default ContactsItem;
