import { all, fork } from 'redux-saga/effects';
import { loginSaga } from '../store/reducers/loginServerResponse/sagas';
import { registerSaga } from '../store/reducers/registrationServerResponse/sagas';

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga)]);
}
