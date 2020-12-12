import React, { Component } from 'react';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBookActions';
import phoneBookOperations from '../../redux/phoneBookOperations';
import phoneBookSelectors from '../../redux/phoneBookSelectors';
import Contacts from './Contacts';

class ContactsContainer extends Component {
    componentDidMount() {
        this.props.onReadDataBase();
    }
    
    render() {
        return (
            <Contacts {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: phoneBookSelectors.getVisibleContacts(state),
})

const mapDispatchToProps = {
    onDeleteContact: phoneBookActions.removeContact,
    onReadDataBase: phoneBookOperations.readDB
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
