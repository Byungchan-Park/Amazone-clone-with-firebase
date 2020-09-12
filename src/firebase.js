import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBE-izNWvXaTOVoqO36BUND3fVuoOw-gK8",
  authDomain: "challenge-e2637.firebaseapp.com",
  databaseURL: "https://challenge-e2637.firebaseio.com",
  projectId: "challenge-e2637",
  storageBucket: "challenge-e2637.appspot.com",
  messagingSenderId: "606640191103",
  appId: "1:606640191103:web:64953f133ed11e4f4d714a",
  measurementId: "G-GHRWK9N7H6",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
