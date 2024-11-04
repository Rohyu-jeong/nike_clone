import {
  createUserWithEmailAndPassword, // 회원가입메서드
} from "firebase/auth";
import { auth } from "./db";
import { saveUserProfile } from "./controller";

// 유저 데이터 타입
export type UserDataType = {
  email: string;
  password: string;
};

// 사용자 회원가입 - Authentication 서비스는 Cloud Firestore 서비스와 연관되지 않고 각각 독립적으로 수행됩니다
export async function signUp(email: string, password: string, name: string) {
  try {
    // auth 객체에 해당 이메일, 비밀번호, 이름에 대해 유효성, 무결성 검사 후 해당 계정을 생성
    // Authentication 서비스는 자동으로 해당 가입 값의 유효성, 무결성 검사를 자동으로 지원합니다
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // 생성한 계정
    const user = userCredential.user;
    // 생성한 계정의 이메일이 존재하면
    if (user.email) {
      // Cloud Firestore서비스인 db에 계정 데이터를 생성 요청
      await saveUserProfile(user.uid, name, user.email);
      console.log(`${name}님 환영합니다!`);
      window.alert(`${name}님 환영합니다!`); // 성공 시 환영 메시지
      window.location.reload(); // 재 로드하여 로그인으로 이동
    }
  } catch (error) {
    console.error("회원가입 에러 발생 : ", error);
  }
}
