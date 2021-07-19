import { call, takeLatest, put } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_SUCCESS } from './types';
import { alertUserLoginData } from '../../../components/firebaseResponses/firebaseResponses';
import { loginUserError, loginUserSuccess } from './actions';
import app from '../../../components/base';

export function* loginSaga() {
  yield takeLatest(LOGIN_USER, sagaWorker);
}

export function* sagaWorker(action) {
  try {
    const email = (action.payload.email as unknown) as string;
    const password = (action.payload.password as unknown) as string;
    const resp = yield call(alertUserLoginData, email, password);
    yield put(loginUserSuccess(resp.user));
    yield alert('Are you logged in!');
  } catch (error) {
    yield put(loginUserError(error));
  }
}
