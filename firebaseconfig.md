<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBXVL1NAO0_DIYpEnY2qr--48J9EXUT82k",
    authDomain: "tinder-clone-90581.firebaseapp.com",
    projectId: "tinder-clone-90581",
    storageBucket: "tinder-clone-90581.appspot.com",
    messagingSenderId: "72290998561",
    appId: "1:72290998561:web:fcde5d4bc68b9698218660",
    measurementId: "G-ECDE8E9RJM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>