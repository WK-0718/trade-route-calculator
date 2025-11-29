import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 🔧 在這裡貼上您從 Firebase 複製的配置
const firebaseConfig = {
  apiKey: "您的-apiKey",
  authDomain: "您的項目.firebaseapp.com",
  projectId: "您的-projectId",
  storageBucket: "您的項目.appspot.com",
  messagingSenderId: "您的-messagingSenderId",
  appId: "您的-appId"
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