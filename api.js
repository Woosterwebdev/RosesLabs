// require('dotenv').config()
import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore"


const firebaseConfig = {
  APIKEY: "AIzaSyDkUdFLCSjFyfhMW_dBnE6BxY5DquIgX8U", //apikey is only here for dev purposes
  authDomain: "roseslabs-51b30.firebaseapp.com",
  projectId: "roseslabs-51b30",
  storageBucket: "roseslabs-51b30.appspot.com",
  messagingSenderId: "238918137912",
  appId: "1:238918137912:web:7f39edd2f787b79cb78ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const shampooAssortmentRef = collection(db, "shampoos")

export async function getShampoos() {
    const snapshot = await getDocs(shampooAssortmentRef)
    const shampoos = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return shampoos
}

export async function getShampoo(id) {
    const docRef = doc(db, "shampoos", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}