import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'kelzzzgallery.firebaseapp.com',
  projectId: 'kelzzzgallery',
  storageBucket: 'kelzzzgallery.appspot.com',
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSENGER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { app, db, storage, auth, googleProvider }
