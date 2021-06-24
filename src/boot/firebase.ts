import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'
import 'firebase/firebase-functions'

const firebaseConfig = {
  apiKey: 'AIzaSyCDn73hnusK2uEZzFLs2HVMDTa8IlGzJNA',
  authDomain: 'plane-crash-171be.firebaseapp.com',
  projectId: 'plane-crash-171be',
  storageBucket: 'plane-crash-171be.appspot.com',
  messagingSenderId: '95308262648',
  appId: '1:95308262648:web:594f02e4e4bb5e541b5f0d'
}

/* const firebaseConfig = {
  apiKey: 'AIzaSyCdwHdIGqPgf_3U4E_eBPGv2YxQNCUuvzg',
  authDomain: 'moses-web.firebaseapp.com',
  databaseURL: 'https://moses-web.firebaseio.com',
  projectId: 'moses-web',
  storageBucket: 'moses-web.appspot.com',
  messagingSenderId: '342379371954',
  appId: '1:342379371954:web:78cdc9146be7d6ca4d18ab',
  measurementId: 'G-9XF0E0QHV4'
} */
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()

const firebaseDB = firebaseApp.firestore()
const firebaseStore = firebaseApp.storage()

export { firebaseAuth, firebaseDB, firebaseApp, firebaseStore, firebaseConfig }
