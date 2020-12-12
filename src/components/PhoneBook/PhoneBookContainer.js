import React, { Component } from 'react';
import { connect } from 'react-redux';
import phoneBookOperations from '../../redux/phoneBookOperations';
import phoneBookSelectors from '../../redux/phoneBookSelectors';
import PhoneBook from './PhoneBook';

class PhoneBookContainer extends Component {
    state = {
        name: '',
        number: '',
    }

    existContact = (list, contactItem) => {
        const isExistContactt = list.findIndex(item => {
            return item.name.toLowerCase() === contactItem.name.toLowerCase()
        });
        return isExistContactt > -1 ? true : false;
    }

    handleSubmit = e => {
        e.preventDefault();

        const contact = {
            name: this.state.name,
            number: this.state.number
        }

        if (!this.existContact(this.props.contacts, contact)) {
            this.props.onAddContact(contact);
        }

        this.setState({ name: '', number: '' });
    }

    handleChange = e => {
        this.setState({ name: e.target.value });
    }

    handleChangeNumber = e => {
        this.setState({ number: e.target.value });
    }

    render() {
        const contact = {
            name: this.state.name,
            number: this.state.number,
        }

        const visibleNotification = this.existContact(this.props.contacts, contact)

        const propsToPhoneBook = {
            onHandleSubmit: this.handleSubmit,
            onHandleChange: this.handleChange,
            onHandleChangeNumber: this.handleChangeNumber,
            visibleNotification,
            name: contact.name,
            number: contact.number
        }

        return (
            <PhoneBook {...propsToPhoneBook} />
        )
    }
}

const mapStateToProps = (state) => ({
        contacts: phoneBookSelectors.getItems(state),
})

const mapDispatchToProps = {
    onAddContact: phoneBookOperations.addContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookContainer);