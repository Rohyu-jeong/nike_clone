import {
  inputTitleStyle,
  logoStyle,
  signupBoxStyle,
  signupContainerStyle,
  titleStyle,
  inputBoxStyle,
  inputStyle,
  signupBtn,
  checkBoxTitleStyle,
  overlayStyle,
} from "../../../style/member/signup";
import { signUp, UserDataType } from "../../../service/authSignUp"; // 회원가입 데이터 추가 함수
import { useRef, useState } from "react";

type PropType = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp: React.FC<PropType> = ({ setIsSignUp }: PropType) => {
  // 회원가입하는 유저 데이터
  // const [user, setUser] = useState<UserDataType>({ email: "", password: "" });
  const emailRef = useRef<HTMLInputElement>(null); // 회원가입하는 유저 이메일 입력창
  const passwordref = useRef<HTMLInputElement>(null); // 회원가입하는 유저 비밀번호 입력창
  const nameRef = useRef<HTMLInputElement>(null); // 회원가입하는 유저의 이름

  // 회원가입 모달 뒤로가기 버튼 클릭 시 (여백클릭)
  const handleClick = () => {
    setIsSignUp((prev) => !prev);
  };

  // 회원가입하기 버튼 클릭 이벤트 핸들러
  const handleSignUpClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // 타입 체크
    const email = emailRef.current?.value;
    const password = passwordref.current?.value;
    const name = nameRef.current?.value;

    if (email && password && name) {
      console.log(email, password, name);
      signUp(email, password, name); // 데이터 추가 요청
    }
  };

  return (
    <section style={signupContainerStyle}>
      <div onClick={handleClick} style={overlayStyle}></div>
      <form style={signupBoxStyle}>
        <img style={logoStyle} src="/image/logo/Nike-Logo.png" alt="" />
        <h1 style={titleStyle}>회원가입하기</h1>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            이름
          </label>
          <input
            style={inputStyle}
            type="text"
            placeholder="이름을 입력하세요."
            ref={nameRef}
          />
        </div>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            이메일
          </label>
          <input
            style={inputStyle}
            type="email"
            placeholder="이메일을 입력하세요."
            ref={emailRef}
          />
        </div>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            비밀번호
          </label>
          <input
            style={inputStyle}
            type="password"
            placeholder="비밀번호를 입력하세요."
            ref={passwordref}
          />
        </div>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            비밀번호 확인
          </label>
          <input
            style={inputStyle}
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
          />
        </div>
        <div>
          <input type="checkbox" />
          <label style={checkBoxTitleStyle} htmlFor="">
            SNS 마케팅 홍보성 문자 수신에 동의합니다.
          </label>
        </div>
        <button
          type="submit"
          style={signupBtn}
          onClick={(e) => handleSignUpClick(e)}
        >
          가입하기
        </button>
      </form>
    </section>
  );
};

export default SignUp;
