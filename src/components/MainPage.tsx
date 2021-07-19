import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';
import { loginUser, userClearData } from '../store/reducers/loginServerResponse/actions';
import { registerUser } from '../store/reducers/registrationServerResponse/actions';
import { RegistrationServerRespReducerData } from '../store/reducers/registrationServerResponse/reducer';
import { Dialogs } from './Dialogs/Dialogs';

interface MainPageProps {
  loginResponse: LoginServerRespReducerData;
  loginUser: typeof loginUser;
  registerResponse: RegistrationServerRespReducerData;
  registerUser: typeof registerUser;
  userClearData: typeof userClearData;
}

interface LoginServerRespReducerData {
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

const MainPage: React.FunctionComponent<MainPageProps> = ({ loginResponse, registerResponse, userClearData }) => {
  const [tokenLogin, setTokenLogin] = useState(loginResponse.resp.token);
  const [tokenRegistration, setTokenRegistration] = useState(registerResponse.resp.token);
  const [dialogs, setDialogs] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const initialState: LoginServerRespReducerData = {
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

  const handleSubmit = () => {
    event.preventDefault();
    userClearData(initialState);
  };

  useEffect(() => {
    firebase
      .database()
      .ref('/dialogs/')
      .limitToFirst(4)
      .get()
      .then((snapshot) => {
        const data = snapshot.val();
        setDialogs(data);
      });
  }, []);

  useEffect(() => {
    setTokenLogin(loginResponse.resp.token);
  }, [loginResponse.resp.token]);

  useEffect(() => {
    setTokenRegistration(registerResponse.resp.token);
  }, [registerResponse.resp.token]);

  if (tokenRegistration == '' && tokenLogin == '') {
    return <Redirect to="/login" />;
  }

  useEffect(() => {
    const results = dialogs.filter((person) => person.clientName.toLowerCase().includes(searchTerm.toLowerCase()));

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="container">
      {<h1>Hello UserName</h1>}
      <div className="dialogs">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
        <ul className="search-area">
          {!!searchTerm &&
            searchResults.map(
              (item) => (
                console.log(item),
                (
                  <div>
                    <h3>{item.clientName}</h3>
                    {item.messages.map((message, index) => (
                      <p key={index}>{!!message && JSON.stringify(message.content)}</p>
                    ))}
                  </div>
                )
              ),
            )}
        </ul>

        {!!dialogs &&
          dialogs.map((dialogKey, index) => {
            return <Dialogs id={index} key={index} name={dialogKey.clientName} value={dialogKey.messages[0].content} />;
          })}
        <p className="child">Closed dialogs</p>
      </div>
      <button onClick={handleSubmit}>Sign out</button>
    </div>
  );
};

const mapStateToProps = ({ loginServerRespReducer, registrationServerRespReducer }) => ({
  loginResponse: loginServerRespReducer,
  registerResponse: registrationServerRespReducer,
});

const mapDispatchToProps = {
  userClearData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
