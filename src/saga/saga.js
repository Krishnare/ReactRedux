// import { takeLatest } from 'redux-saga/effects';
// import * as actions from '../actions/product-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { axios } from 'axios';

function* fetchProducts(data) {
  yield delay(1000);
  const products = yield call([axios, axios.get], 'https://api.myjson.com/bins/uyl3y')
  yield put({ type: 'FETCH_USERS_SUCCESS', payload: data })
}
export function* watchFetchProducts() {
  yield takeEvery('FETCH_USERS', fetchProducts)
}
