import { put, takeLatest, call } from 'redux-saga/effects';
import dataService from '../services/dataService';

function* getAllPost(obj) {
    try {
        const products = yield call(dataService.get, obj.payload.url);
        yield put({ type: 'GET_ALL_POST_SUCCESS', data: products.data })
    }
    catch(error) {
        yield put({ type: 'GET_ALL_POST_FAIL', data: error })
    }
}

export default function* rootPostSaga() {
    yield takeLatest('GET_ALL_POST', getAllPost)
}