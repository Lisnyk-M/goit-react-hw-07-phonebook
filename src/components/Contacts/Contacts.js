import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactItem from '../ContactsItem/ContactsItemContainer';
import slide from './slide.module.css';
import styles from './Contacts.module.css';


const Contacts = ({contacts}) => {
    return (
        <TransitionGroup component="ul" className={styles.list}>
            {contacts.length > 0 && contacts.map(item => (
                <CSSTransition key={item.id} timeout={300} classNames={slide} appear={false}>
                    <ContactItem
                        key={item.id}
                        id={item.id}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired)
}

export default Contacts;

