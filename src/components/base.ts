import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDI9D9VjftCQACfS4SR_YTS4Z4Njgd_Yww',
  authDomain: 'gronsappchat.firebaseapp.com',
  databaseURL: 'https://gronsappchat-default-rtdb.firebaseio.com',
  projectId: 'gronsappchat',
  storageBucket: 'gronsappchat.appspot.com',
  messagingSenderId: '938248516568',
  appId: '1:938248516568:web:0d6d482b5f05af3bc2b8ad',
  measurementId: 'G-6S2JQJQL7B',
});

export default app;
