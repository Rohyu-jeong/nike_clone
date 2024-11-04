import { initializeApp } from "firebase/app"; // 파이어베이스 초기화
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 파이어 베이스 연결 객체 타입
type ConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

// 파이어 베이스 연결 객체 - 파이어베이스 콘솔에서 프로젝트 생성하면 발급받을 수 있습니다
const firebaseConfig = {
  apiKey: "AIzaSyDLjEW7BK7jLRy8ywTCE0BQZNyzTYnF26w",
  authDomain: "testing-bea15.firebaseapp.com",
  projectId: "testing-bea15",
  storageBucket: "testing-bea15.appspot.com",
  messagingSenderId: "473033035201",
  appId: "1:473033035201:web:02c486eb579d035c4d7340",
  measurementId: "G-V2PHBQQ3PL",
};

export const app = initializeApp(firebaseConfig); // 앱을 초기화 후 파이어베이스 객체 반환
export const analytics = getAnalytics(app); // 파이어베이스 객체의 인스턴스를 생성

// 파이어베이스 데이터베이스 생성 - Realtime Database아니고 Cloud Firestore입니다
export const db = getFirestore(app);

// auth객체를 생성 - 유저 계정 관련 보안 서비스
export const auth = getAuth(app);
