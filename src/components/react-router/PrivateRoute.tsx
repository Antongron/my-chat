import { useContext } from 'react';
import { connect } from 'react-redux';
// import { AuthContext } from './Auth';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { authCheck } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // const { currentUser } = useContext(AuthContext);
  const currentUser = '';
  return (
    <Route
      {...rest}
      render={(routeProps) => (authCheck !== null ? <RouteComponent {...routeProps} /> : <Redirect to={'/login'} />)}
    />
  );
};

const mapStateToProps = ({ loginServerRespReducer, registrationServerRespReducer }) => ({
  loginResponse: loginServerRespReducer,
  registerResponse: registrationServerRespReducer,
});

export default connect(mapStateToProps, null)(PrivateRoute);
