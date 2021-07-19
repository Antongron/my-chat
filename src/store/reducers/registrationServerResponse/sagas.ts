import { call, takeLatest, put } from 'redux-saga/effects';
import { REGISTER_USER } from './types';
import { alertUserRegistrationData } from '../../../components/firebaseResponses/firebaseResponses';
import { registrationUserError, registrationUserSuccess } from './actions';

export function* registerSaga() {
  yield takeLatest(REGISTER_USER, sagaWorker);
}

export function* sagaWorker(action) {
  try {
    const email = (action.payload.email as unknown) as string;
    const password = (action.payload.password as unknown) as string;
    const resp = yield call(alertUserRegistrationData, email, password);
    yield put(registrationUserSuccess(resp.user));
    yield alert('Are you registered account!');
  } catch (error) {
    yield put(registrationUserError(error));
  }
}
