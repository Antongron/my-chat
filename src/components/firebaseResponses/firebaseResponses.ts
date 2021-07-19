import firebase from 'firebase/app';

import app from '../base';

export function alertUserLoginData(email: string, password: string): Promise<firebase.auth.UserCredential> {
  return app.auth().signInWithEmailAndPassword(email, password);
}

export function alertUserRegistrationData(email: string, password: string): Promise<firebase.auth.UserCredential> {
  return app.auth().createUserWithEmailAndPassword(email, password);
}
