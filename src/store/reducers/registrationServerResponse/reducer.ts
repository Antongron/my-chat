import * as types from './types';
import { Reducer } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { USER_CLEAR } from '../../types';

export interface RegistrationServerRespReducerData {
  resp: {
    email: string;
    id: string;
    token: string;
  };
  error: {
    code: string;
    message: string;
  };
  success: boolean;
}

const initialState: RegistrationServerRespReducerData = {
  resp: {
    email: '',
    id: '',
    token: '',
  },
  error: {
    code: '',
    message: '',
  },
  success: false,
};

export const registrationServerRespReducer = (state = initialState, action) => {
  const resp = action.resp;
  const error = action.error;
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        resp: { email: resp.email, id: resp.uid, token: resp.refreshToken },
        success: true,
      };
    case types.REGISTER_USER_ERROR:
      return {
        ...state,
        error,
        success: false,
      };

    case USER_CLEAR:
      return {
        ...state,
        resp: { email: action.payload.resp.email, id: action.payload.resp.id, token: action.payload.resp.token },
        success: false,
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'registerToken',
  storage,
  whitelist: ['resp'],
};

export const persistedRegistrationReducer = persistReducer(persistConfig, registrationServerRespReducer);
