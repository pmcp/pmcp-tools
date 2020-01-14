import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyAfUQQc7YYj8tw_3MCSy_mrajj1VyyvGgk",
  authDomain: "pmcp-tools.firebaseapp.com",
  databaseURL: "https://pmcp-tools.firebaseio.com",
  projectId: "pmcp-tools",
  storageBucket: "pmcp-tools.appspot.com",
  messagingSenderId: "754653235294",
  appId: "1:754653235294:web:3d3359c4be848fb2810ccf"
}

firebase.initializeApp(config)