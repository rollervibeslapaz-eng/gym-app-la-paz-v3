// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNEenYX2Uom8wK_X5KYHBqMuDR0iMmTTo",
  authDomain: "roller-vibes-mx-la-paz.firebaseapp.com",
  projectId: "roller-vibes-mx-la-paz",
  storageBucket: "roller-vibes-mx-la-paz.firebasestorage.app",
  messagingSenderId: "427270707643",
  appId: "1:427270707643:web:e4ef2c5925aa0adfbb8c9e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

export { app };
