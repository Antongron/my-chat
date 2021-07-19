import React, { useEffect, useState } from 'react';
import app from '../base';

export const authCheck = ({ registerResponse, loginResponse }) => {
  useEffect(() => {
    const registerToken = registerResponse.resp.token;
    const loginToken = loginResponse.resp.token;
    if (registerToken.length > 0) {
      return registerToken;
    } else if (loginToken.length > 0) {
      return loginToken;
    }
    return null;
  }, []);
};

const mapStateToProps = ({ registrationServerRespReducer, loginServerRespReducer }) => ({
  registerResponse: registrationServerRespReducer,
  loginResponse: loginServerRespReducer,
});
