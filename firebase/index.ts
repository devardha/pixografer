import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyC6T3PnSbvwA5D0Z70M9x8D29srnypRksY',
    authDomain: "pixografer-ed106.firebaseapp.com",
    databaseURL: "https://pixografer-ed106.firebaseio.com",
    projectId: "pixografer-ed106",
    storageBucket: "pixografer-ed106.appspot.com",
    messagingSenderId: "474006244465",
    appId: "1:474006244465:web:8c3223626f94aa15e81fd0",
    measurementId: "G-9MCZK1RKGM"
};

try {
    firebase.initializeApp(firebaseConfig);
    if(typeof window !== 'undefined' && firebase.app.length){
        if('measurementId' in firebaseConfig) firebase.analytics();
    }
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const storage = firebase.storage();

export  {
    storage, firebase as default
}