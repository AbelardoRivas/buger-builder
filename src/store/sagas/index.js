import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga } from './auth';
import { checkAuthTimeout } from '../actions/auth';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeout);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
}