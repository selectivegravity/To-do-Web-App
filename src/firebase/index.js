import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvbyZNLA1tEaB-rgxPjYdDsPLEt7--sa8",
    authDomain: "todo-app-690d3.firebaseapp.com",
    projectId: "todo-app-690d3",
    storageBucket: "todo-app-690d3.appspot.com",
    messagingSenderId: "980920811530",
    appId: "1:980920811530:web:407231cd6cfc46784b1ff3"
}

firebase.initializeApp(firebaseConfig)

export default firebase
