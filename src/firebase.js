import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBK1rq6y-yK6n__vkKYUUDD18cbl_Bd7yI",
    authDomain: "messenger-clone-b311d.firebaseapp.com",
    databaseURL: "https://messenger-clone-b311d.firebaseio.com",
    projectId: "messenger-clone-b311d",
    storageBucket: "messenger-clone-b311d.appspot.com",
    messagingSenderId: "840394304359",
    appId: "1:840394304359:web:4282d661286831c49fddc2",
    measurementId: "G-WN3DDZNHXD"
})


const db = firebaseApp.firestore()

export default db