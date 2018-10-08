import { put, takeLatest, call } from 'redux-saga/effects';
import dataService from '../services/dataService';
import * as registerTypes from '../actionTypes/Register';
import * as registerAction from '../actions/Register';


function* doRegistreation(obj) {
    try {
        const products = yield call(dataService.post, obj.data.url, obj.data.data);
        yield put(registerAction.doRegisterSuccess(products))
    }
    catch(error) {
        yield put(registerAction.doRegisterFail(error));
    }
}

export default function* rootPostSaga() {
    yield takeLatest(registerTypes.DO_REGISTER, doRegistreation)
}