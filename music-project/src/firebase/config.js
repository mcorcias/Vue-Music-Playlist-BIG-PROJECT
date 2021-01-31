import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8pxRWR2ofI_k6ySTSVqcAsLA6ZPdv2jQ',
  authDomain: 'music-project-c9b39.firebaseapp.com',
  projectId: 'music-project-c9b39',
  storageBucket: 'music-project-c9b39.appspot.com',
  messagingSenderId: '545922260123',
  appId: '1:545922260123:web:bb0cef461c8da5ea90fa3e',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
