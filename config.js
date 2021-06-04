import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8Fo8vicrzab_t08ljhPX-n_uZKhDr5Dc",
  authDomain: "school-attendence-app-26905.firebaseapp.com",
  databaseURL: "https://school-attendence-app-26905-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-26905",
  storageBucket: "school-attendence-app-26905.appspot.com",
  messagingSenderId: "70017563083",
  appId: "1:70017563083:web:956b3992f9b45cbb55de4e"
};
let app = firebase.initializeApp(firebaseConfig);
export default app.database();