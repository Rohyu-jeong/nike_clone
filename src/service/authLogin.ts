import {
  getAuth, // auth 객체
  signInWithEmailAndPassword, // 로그인메서드
} from "firebase/auth";
import { auth } from "./db";

// 사용자 로그인 함수
// Authentication 서비스에는 로그인 자동으로 JWT 토큰이 발급되고 요청 시 마다 토큰을 사용하여 검사합니다
export function login(email: string, password: string): Promise<boolean> {
  // 전달받은 로그인 값이 auth 객체에 존재하는 지 비교검사 - 존재하는 계정인지 검사
  const isLogin = signInWithEmailAndPassword(auth, email, password)
    // 해당 데이터가 존재하면 데이터를 담은 userCredential객체를 반환하고 실행
    .then((userCredential) => {
      // 로그인 성공
      const user = userCredential.user;
      console.log("로그인 유저: ", user.email);
      return true;
    })
    .catch((error) => {
      // 로그인 실패
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("로그인 에러 발생 : ", errorCode, errorMessage);
      return false;
    });

  return isLogin;
}
