import * as React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Redirect, Link } from 'react-router-dom';
import { useContext } from 'react';
import './style.sass';
import { loginUser } from '../store/reducers/loginServerResponse/actions';
import { LoginSchema } from './validation';
import { LoginServerRespReducerData } from '../store/reducers/loginServerResponse/reducer';
import { RegistrationServerRespReducerData } from '../store/reducers/registrationServerResponse/reducer';

interface LoginFormProps {
  loginResponse: LoginServerRespReducerData;
  registerResponse: RegistrationServerRespReducerData;
  loginUser: typeof loginUser;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ registerResponse, loginResponse, loginUser }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  let errorMessage;
  if (loginResponse) {
    errorMessage = loginResponse.error.message;
  }

  if (loginResponse.resp.token.length > 0 || registerResponse.resp.token.length > 0) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <h1>Please log in</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={({ email, password }) => {
          loginUser({ email, password });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="item">
              <div>
                <label className="far fa-envelope" htmlFor="email">
                  Email Address
                </label>
                <Field name="email" />
              </div>
              {errors.email && touched.email ? (
                <div className="bg-danger">{errors.email}</div>
              ) : (
                <div className="empty-div" />
              )}
            </div>
            <div className="item">
              <div>
                <label htmlFor="password">
                  <div className="fas fa-key" />
                  <div>Please type your password</div>
                </label>
                <Field name="password" type="password" />
              </div>
              {errors.password && touched.password ? (
                <div className="bg-danger">{errors.password}</div>
              ) : (
                <div className="empty-div" />
              )}
            </div>
            <button type="submit">Login</button>
            {errorMessage.length > 0 && <div className="authErrors item">{errorMessage}</div>}
            <Link to="/registration">Create an account</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ registrationServerRespReducer, loginServerRespReducer }) => ({
  registerResponse: registrationServerRespReducer,
  loginResponse: loginServerRespReducer,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
