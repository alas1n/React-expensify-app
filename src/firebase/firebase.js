import * as firebase from 'firebase'


const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: "1:851514845493:web:755cad51fde6d367cb047c",
	measurementId: "G-M5ZS21C3BE"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default}