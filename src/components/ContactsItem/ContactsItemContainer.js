import {connect} from 'react-redux';
import phoneBookOperations from '../../redux/phoneBookOperations';
import phoneBookSelectors from '../../redux/phoneBookSelectors';
import ContactsItem from './ContactsItem';

const mapStateToProps = (state, ownProps) => (
    {...phoneBookSelectors.getItemId(state, ownProps.id)}
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDeleteContact: () => dispatch(phoneBookOperations.removeContact(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps) (ContactsItem);
