import { db } from './firebase.js';
import { collection, addDoc, getDocs, doc, setDoc, onSnapshot } from 'firebase/firestore';

// 測試 Firebase 連接
async function testFirebase() {
  try {
    console.log("🔄 測試 Firebase 連接...");
    
    // 測試寫入數據
    const testRef = await addDoc(collection(db, 'test'), {
      message: '測試連接',
      timestamp: new Date()
    });
    console.log("✅ 數據寫入成功");
    
    // 測試讀取數據
    const querySnapshot = await getDocs(collection(db, 'test'));
    console.log("✅ 數據讀取成功");
    
    // 顯示成功消息
    showMessage('🎉 Firebase 連接成功！', 'success');
    
  } catch (error) {
    console.error("❌ Firebase 連接失敗:", error);
    showMessage('❌ Firebase 連接失敗: ' + error.message, 'error');
  }
}

function showMessage(message, type) {
  const statusDiv = document.getElementById('calculation-status');
  if (statusDiv) {
    statusDiv.innerHTML = message;
    statusDiv.className = type === 'success' ? 'success-message' : 'error-message';
  }
}

// 頁面加載完成後測試連接
document.addEventListener('DOMContentLoaded', function() {
  console.log("🚀 應用初始化");
  testFirebase();
});