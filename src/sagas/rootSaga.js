import { all, fork } from 'redux-saga/effects';
import PostSaga from './Post';

export default function* rootSaga() {
    yield all([
        fork(PostSaga)
    ])
}