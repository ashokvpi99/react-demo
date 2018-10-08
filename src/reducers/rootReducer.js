import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Register from './Register';
import Login from './Login';

const rootReducer = combineReducers({
    form: formReducer,
    Register,
    Login
});

export default rootReducer;