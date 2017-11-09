import Rebase from 're-base';
import firebase from 'firebase/app';
import firebaseDatabase from 'firebase/database';

import firebaseConfig from './firebase-config';

const app = firebase.initializeApp(firebaseConfig);
const database = Rebase.createClass(app.database);

export default database;