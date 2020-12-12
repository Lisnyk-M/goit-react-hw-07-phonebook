import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBookActions';
import phoneBookSelectors from '../../redux/phoneBookSelectors';
import Filter from './Filter';

const mapStateToProps = state => ({
    value: phoneBookSelectors.getFilter(state)
})

const mapDispatchToProps = {
    onChangeFilter: phoneBookActions.updateFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);