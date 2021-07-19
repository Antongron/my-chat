import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';
import './style.sass';
import { connect } from 'react-redux';
import { registerUser } from '../store/reducers/registrationServerResponse/actions';
import { RegisterSchema } from './validation';
import { RegistrationServerRespReducerData } from '../store/reducers/registrationServerResponse/reducer';
import { LoginServerRespReducerData } from '../store/reducers/loginServerResponse/reducer';

// import { AuthContext } from './react-router/Auth';

interface RegisterFormProps {
  registerResponse: RegistrationServerRespReducerData;
  loginResponse: LoginServerRespReducerData;
  registerUser: typeof registerUser;
}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = ({
  registerResponse,
  loginResponse,
  registerUser,
}) => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  let errorMessage;
  if (registerResponse) {
    errorMessage = registerResponse.error.message;
  }

  if (loginResponse.resp.token.length > 0 || registerResponse.resp.token.length > 0) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={({ email, password }) => {
          registerUser({ email, password });
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
                  <div>Create your password</div>
                </label>
                <Field name="password" type="password" />
              </div>
              {errors.password && touched.password ? (
                <div className="bg-danger">{errors.password}</div>
              ) : (
                <div className="empty-div" />
              )}
            </div>
            <div className="item">
              <div>
                <label htmlFor="confirmPassword">
                  <div className="far fa-check-square" />
                  <div>Confirm your password</div>
                </label>
                <Field name="confirmPassword" type="password" />
              </div>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="bg-danger">{errors.confirmPassword}</div>
              ) : (
                <div className="empty-div" />
              )}
            </div>
            <button type="submit">Registration</button>
            {errorMessage.length > 0 && <div className="authErrors item">{errorMessage}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ registrationServerRespReducer, loginServerRespReducer }) => {
  return {
    loginResponse: loginServerRespReducer,
    registerResponse: registrationServerRespReducer,
  };
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
