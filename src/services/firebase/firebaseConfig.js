import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDT9mtgBJVFtAIi_20RfT1uSdGQtOxIlj4",
    authDomain: "ecommerce-proyectofinalreact.firebaseapp.com",
    projectId: "ecommerce-proyectofinalreact",
    storageBucket: "ecommerce-proyectofinalreact.appspot.com",
    messagingSenderId: "220121006667",
    appId: "1:220121006667:web:525b75dcd18d6e996a83ce"
};

//Referencia al proyecto
const app = initializeApp(firebaseConfig);

//Objeto para conectar a la base de datos
export const db = getFirestore(app)