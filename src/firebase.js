import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 🔧 在這裡貼上您從 Firebase 複製的配置
const firebaseConfig = {
  apiKey: "AIzaSyDvubpcu7EuSjwaJ3Cl4ny8-2J_7xtg3-g",
  authDomain: "trade-route-calculator-1d777.firebaseapp.com",
  projectId: "trade-route-calculator-1d777",
  storageBucket: "trade-route-calculator-1d777.firebasestorage.app",
  messagingSenderId: "364965676370",
  appId: "1:364965676370:web:8678a24620a916455d268b"
};

// 初始化 Firebase
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("✅ Firebase 初始化成功");
} catch (error) {
  console.error("❌ Firebase 初始化失敗:", error);
}

export { db };
