import { put, takeLatest, call } from 'redux-saga/effects';
import dataService from '../services/dataService';
import * as loginTypes from '../actionTypes/Login';
import * as loginTypesAction from '../actions/Login';


function* doLogin(obj) {
    try {
        const loginData = yield call(dataService.post, obj.data.url, obj.data.data);
        yield put(loginTypesAction.doLoginSuccess(loginData))
    }
    catch(error) {
        yield put(loginTypesAction.doLoginFail(error));
    }
}

export default function* rootPostSaga() {
    yield takeLatest(loginTypes.DO_LOGIN, doLogin)
}