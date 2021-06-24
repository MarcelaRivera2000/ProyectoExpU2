import firebase from 'firebase';

const config={
    apiKey: "AIzaSyCYjHHUhxjqyFciE2oHDb2LxL27P5JkADI",
    authDomain: "prueba2-2da0a.firebaseapp.com",
    projectId: "prueba2-2da0a",
    storageBucket: "prueba2-2da0a.appspot.com",
    messagingSenderId: "763227127956",
    appId: "1:763227127956:web:7b9bb758468db3edc33481",
    measurementId: "G-7WPJDBY63R"
}

firebase.initializeApp(config);

export default firebase;