// پیکربندی Firebase — پروژه‌ی hajar-service
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKlJBbwKM8ZCu5kqtp3PdkT6SjOiZEqFk",
  authDomain: "hajar-service.firebaseapp.com",
  projectId: "hajar-service",
  storageBucket: "hajar-service.firebasestorage.app",
  messagingSenderId: "330031048478",
  appId: "1:330031048478:web:9dad4407ce987caf4a0b0f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// اتصال با Long Polling برای سازگاری بهتر با شبکه‌ها/VPNهایی که WebSocket را مسدود می‌کنند
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false,
});
