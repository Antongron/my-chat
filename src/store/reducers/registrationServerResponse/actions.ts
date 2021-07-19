import * as type from './types';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

interface UserRegisterData {
  email: string;
  password: string;
}

interface RegistrationUserActionType {
  type: typeof type.REGISTER_USER;
  payload: UserRegisterData;
}

export type RegistrationReducerActionType = RegistrationUserActionType;

export const registerUser = (payload: UserRegisterData): RegistrationUserActionType => ({
  type: type.REGISTER_USER,
  payload,
});

interface registrationUserErrorData {
  code: string;
  message: string;
  success: boolean;
}

interface RegistrationUserErrorActionType {
  type: typeof type.REGISTER_USER_ERROR;
  error: registrationUserErrorData;
}

export type RegistrationErrorReducerActionType = RegistrationUserErrorActionType;

export const registrationUserError = (error: registrationUserErrorData): RegistrationErrorReducerActionType => ({
  type: type.REGISTER_USER_ERROR,
  error,
});

interface registrationUserSuccessData {
  email: string;
  id: string;
  token: string;
  success: boolean;
}

interface RegistrationUserSuccessActionType {
  type: typeof type.REGISTER_USER_SUCCESS;
  resp: registrationUserSuccessData;
}

export type RegistrationSuccessReducerActionType = RegistrationUserSuccessActionType;

export const registrationUserSuccess = (resp: registrationUserSuccessData): RegistrationSuccessReducerActionType => ({
  type: type.REGISTER_USER_SUCCESS,
  resp,
});
