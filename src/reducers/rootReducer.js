import { combineReducers } from 'redux';
import Post from './Post';

const rootReducer = combineReducers({
    postState: Post
});

export default rootReducer;