import * as types from './types';
import { Reducer } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { USER_CLEAR } from '../../types';

export interface LoginServerRespReducerData {
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

export const initialState: LoginServerRespReducerData = {
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

export const loginServerRespReducer = (state = initialState, action) => {
  const resp = action.resp;
  const error = action.error;
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        resp: { email: resp.email, id: resp.uid, token: resp.refreshToken },
        success: true,
      };
    case types.LOGIN_USER_ERROR:
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
  key: 'loginToken',
  storage,
  whitelist: ['resp'],
};

export const persistedLoginReducer = persistReducer(persistConfig, loginServerRespReducer);
