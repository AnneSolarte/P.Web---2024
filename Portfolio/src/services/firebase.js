import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, getDocs, getFirestore, updateDoc, doc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
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
  console.log('Form in addproject', formData)
  try {
    const docRef = await addDoc(collection(db, 'projects'), formData)
    console.log('Document written with ID: ', docRef.id)
    // Luego, actualiza el documento con el ID generado
    await updateDoc(doc(db, 'projects', docRef.id), { id: docRef.id })
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

export const uploadImage = async (image, project) => {
  console.log(project, image)
  try {
    const storage = getStorage()

    const storageRef = ref(storage, `${project}/${image.name}`)

    await uploadBytes(storageRef, image)

    const imageURL = await getDownloadURL(storageRef)
    return imageURL
  } catch (e) {
    console.error('Error uploading img: ', e)
  }
}
