import firebase from 'firebase';
import 'firebase/firestore';
import fireConfig from '@/FireBaseConfig/firestoreConfig';


const FirebaseApp = firebase.initializeApp(fireConfig);

export default FirebaseApp.firestore();
