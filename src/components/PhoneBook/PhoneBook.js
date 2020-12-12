import React from 'react';
import styles from './PhoneBook.module.css';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification/Notification';
import UpBar from './AnimComponents.module.css';
import Fade from './AnimComponents.module.css';

const PhoneBook = ({ onHandleSubmit, onHandleChangeNumber, onHandleChange, name, number, visibleNotification }) => {
    return (
        <>
            <CSSTransition in appear timeout={500} classNames={UpBar} unmountOnExit>
                <h2 className={styles.title}>PhoneBook </h2>
            </CSSTransition>

            <CSSTransition
                in={visibleNotification}
                timeout={250} classNames={Fade}
                unmountOnExit
            >
                <Notification message="is allready in contacts"></Notification>
            </CSSTransition>

            <form className={styles.inputContact} onSubmit={onHandleSubmit}>
                <label className={styles.label}>Name</label>
                <input
                    className={styles.input}
                    type="text"
                    value={name}
                    onChange={onHandleChange}
                >
                </input>
                <label className={styles.label}>Number</label>

                <input
                    className={styles.input}
                    type="phone"
                    value={number}
                    onChange={onHandleChangeNumber}>
                </input>

                <button type="submit" className={styles.buttonAddContact}>Add contact</button>
            </form>
        </>
    )
}

PhoneBook.propTypes = {
    onHandleSubmit: PropTypes.func.isRequired,
    onHandleChangeNumber: PropTypes.func.isRequired,
    onHandleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    visibleNotification: PropTypes.bool,

    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired)
}

export default PhoneBook;