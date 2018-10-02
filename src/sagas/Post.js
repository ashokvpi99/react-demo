import { put, takeLatest, call } from 'redux-saga/effects';
import dataService from '../services/dataService';

function resolvePromise(url, options = {}) {
    return dataService.get(url).then(data => data).catch(err => err)
}

function* getAllPost() {
    try {
        const products = yield call(resolvePromise('https://jsonplaceholder.typicode.com/posts'));
        yield put({ type: 'GET_ALL_POST_SUCCESS', data: products })
    }
    catch(error) {
        yield put({ type: 'GET_ALL_POST_FAIL', data: error })
    }
}

export default function* rootPostSaga() {
    yield takeLatest('GET_ALL_POST', getAllPost)
}