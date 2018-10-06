import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Post from './Post';

const rootReducer = combineReducers({
    postState: Post,
    form: formReducer
});

export default rootReducer;