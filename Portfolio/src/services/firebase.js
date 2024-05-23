import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)

export const logIn = (formData) => {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then(async (userCredential) => {
      const user = userCredential.user
      console.log(user.uid)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}

export const addProject = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'projects'), formData)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, 'projects'))
  const arrayProducts = []

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    arrayProducts.push({ id: doc.id, ...data })
  })

  return arrayProducts
}
