import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistedLoginReducer } from './reducers/loginServerResponse/reducer';
import { persistedRegistrationReducer } from './reducers/registrationServerResponse/reducer';

export const rootReducer = combineReducers({
  loginServerRespReducer: persistedLoginReducer,
  registrationServerRespReducer: persistedRegistrationReducer,
});
