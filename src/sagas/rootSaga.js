import { all, fork } from 'redux-saga/effects';
import ReisterSaga from './Register';
import LoginSaga from './Login';

export default function* rootSaga() {
    yield all([
        fork(ReisterSaga),
        fork(LoginSaga)
    ])
}