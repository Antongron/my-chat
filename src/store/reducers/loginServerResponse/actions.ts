import * as type from './types';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;
import { USER_CLEAR } from '../../types';

interface UserLoginData {
  email: string;
  password: string;
}

interface LoginUserActionType {
  type: typeof type.LOGIN_USER;
  payload: UserLoginData;
}

export type LoginReducerActionType = LoginUserActionType;

export const loginUser = (payload: UserLoginData): LoginUserActionType => ({
  type: type.LOGIN_USER,
  payload,
});

interface UserClearData {
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

interface UserClearDataActionType {
  type: typeof USER_CLEAR;
  payload: UserClearData;
}

export type UserClearReducerActionType = UserClearDataActionType;

export const userClearData = (payload: UserClearData): UserClearDataActionType => ({
  type: USER_CLEAR,
  payload,
});

interface loginUserErrorData {
  code: string;
  message: string;
  success: boolean;
}

interface LoginUserErrorActionType {
  type: typeof type.LOGIN_USER_ERROR;
  error: loginUserErrorData;
}

export type LoginErrorReducerActionType = LoginUserErrorActionType;

export const loginUserError = (error: loginUserErrorData): LoginErrorReducerActionType => ({
  type: type.LOGIN_USER_ERROR,
  error,
});

interface loginUserSuccessData {
  email: string;
  id: string;
  token: string;
  success: boolean;
}

interface LoginUserSuccessActionType {
  type: typeof type.LOGIN_USER_SUCCESS;
  resp: loginUserSuccessData;
}

export type LoginSuccessReducerActionType = LoginUserSuccessActionType;

export const loginUserSuccess = (resp: loginUserSuccessData): LoginSuccessReducerActionType => ({
  type: type.LOGIN_USER_SUCCESS,
  resp,
});
