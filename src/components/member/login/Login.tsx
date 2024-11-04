import { useEffect, useState } from "react";
import { login } from "../../../service/authLogin";
import {
  inputBoxStyle,
  inputStyle,
  loginBoxStyle,
  loginBtn,
  loginContainerStyle,
  loginFormStyle,
  logoStyle,
  memberContnetBoxStyle,
  memberContnetImgStyle,
  memberContnetTextStyle,
  memberContnetTitleStyle,
  memberTitleBoxStyle,
  postStyle1,
  postStyle2,
  signupBoxStyle,
} from "../../../style/member/login";
import { useNavigate } from "react-router-dom";

// prop 타입
type PropType = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<PropType> = ({ setIsSignUp, setIsLogin }: PropType) => {
  // 사용자의 로그인 정보
  const [user, setUser] = useState<{ email: string; pw: string }>({
    email: "",
    pw: "",
  });
  // 네비게이션
  const navigation = useNavigate();

  // 회원가입 모달 등장 이벤트
  const handleClick = () => {
    setIsSignUp((prev) => !prev);
  };

  // 로그인 입력 이벤트
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    isInput: string
  ) => {
    if (isInput === "email") {
      setUser((prev) => {
        return {
          email: e.target.value,
          pw: prev.pw,
        };
      });
    }

    if (isInput === "pw") {
      setUser((prev) => {
        return {
          email: prev.email,
          pw: e.target.value,
        };
      });
    }
  };

  // 로그인 이벤트
  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const loginResult = await login(user.email, user.pw);
    if (loginResult) {
      console.log("로그인 성공");
      setIsLogin(true);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      console.log("로그인 실패");
      setIsLogin(false);
      navigation("/member");
      window.alert("로그인 정보가 일치하지 않습니다!");
    }
  };

  // 이전 로그인 상태였다면 로그인 하기
  useEffect(() => {
    const loginUser = localStorage.getItem("user");

    const isLogin = async () => {
      if (loginUser) {
        const userData = JSON.parse(loginUser);
        const loginResult = await login(userData.email, userData.pw);
        if (loginResult) {
          console.log("로그인 성공");
          setIsLogin(true);
        } else {
          console.log("로그인 실패");
          setIsLogin(false);
          navigation("/member");
          window.alert("로그인 정보가 일치하지 않습니다!");
        }
      }
    };

    isLogin();
  }, []);

  return (
    <section style={loginContainerStyle}>
      <div style={loginBoxStyle}>
        <div style={memberContnetBoxStyle}>
          <img
            style={memberContnetImgStyle}
            src="/image/member/login.png"
            alt=""
          />
          <div style={memberTitleBoxStyle}>
            <h1 style={memberContnetTitleStyle}>NIKE MEMBERSHIP</h1>
            <h3 style={memberContnetTextStyle}>
              나이키 멤버가 되어 많은 혜택을 받아보세요!
            </h3>
          </div>
          <img style={postStyle1} src="/image/member/login2.jpg" alt="" />
          <img style={postStyle2} src="/image/member/login3.jpg" alt="" />
        </div>
        <form action="/login" style={loginFormStyle}>
          <img style={logoStyle} src="/image/logo/Nike-Logo.png" alt="" />
          <div style={inputBoxStyle}>
            <label htmlFor="username">아이디</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="아이디를 입력하세요."
              onChange={(e) => handleInput(e, "email")}
            />
          </div>
          <div style={inputBoxStyle}>
            <label htmlFor="password">비밀번호</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="비밀번호를 입력하세요."
              onChange={(e) => handleInput(e, "pw")}
            />
          </div>
          <button style={loginBtn} onClick={(e) => handleLogin(e)}>
            로그인
          </button>
          <div style={signupBoxStyle}>
            <span>계정이 없으신가요? </span>
            <span onClick={handleClick}>회원가입하기</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
