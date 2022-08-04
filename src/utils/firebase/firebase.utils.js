import { initializeApp } from 'firebase/app'

import {
  signInWithRedirect,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtH1l78K0DGtUhPLruIOm1I_zieBNgHGM",
  authDomain: "katana-ecommerce-db.firebaseapp.com",
  projectId: "katana-ecommerce-db",
  storageBucket: "katana-ecommerce-db.appspot.com",
  messagingSenderId: "979674539174",
  appId: "1:979674539174:web:313715c31d1058bd548067"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// creates an instance of the google provider class 
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)

// create firestore db 
export const db = getFirestore()

// Create a user after authentication 
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef
}