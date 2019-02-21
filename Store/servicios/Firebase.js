import  * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBPRNuRPjf52t4D815Enou-INMSqc6Ikmg",
    authDomain: "clon-instagram-d2960.firebaseapp.com",
    databaseURL: "https://clon-instagram-d2960.firebaseio.com",
    projectId: "clon-instagram-d2960",
    storageBucket: "clon-instagram-d2960.appspot.com",
    messagingSenderId: "406053184447"
  };
  firebase.initializeApp(config);

  export const autenticacion = firebase.auth()
  export const baseDeDatos = firebase.database()
  