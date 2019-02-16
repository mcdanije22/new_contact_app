import {combineReducers} from 'redux';
import initialContactList from '../components/contacts/contactReducers';
import modalToggle from '../components/addForm/addFormReducer';

const rootReducer = combineReducers({
    initialContactList,
    modalToggle
})
export default rootReducer;
