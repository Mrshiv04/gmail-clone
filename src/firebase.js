import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCTpETrjBwrFtluAPhdkWQK3qayQ2KGLDo',
	authDomain: 'shivam-mail-clone.firebaseapp.com',
	projectId: 'shivam-mail-clone',
	storageBucket: 'shivam-mail-clone.appspot.com',
	messagingSenderId: '265331466085',
	appId: '1:265331466085:web:86d045f041995c6dd5cb8c',
	measurementId: 'G-YWB7RPEY2Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
