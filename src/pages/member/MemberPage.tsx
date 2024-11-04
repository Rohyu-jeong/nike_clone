import { useEffect, useState, useRef } from "react";
import { fadeInGSAP } from "../../animation/fadeIn";
import LoadingPage from "../LoadingPage";
import Login from "../../components/member/login/Login";
import SignUp from "../../components/member/signup/SignUp";
import Profile, { UserType } from "../../components/member/profile/Profile";
import { login } from "../../service/authLogin";

type PropsType = {
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
};

const MenberPage = ({ userData, setUserData }: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 값
  const [isSignUp, setIsSignUp] = useState<boolean>(false); // 회원가입 박스 등장 상태 값
  const [isLogin, setIsLogin] = useState<boolean>(false); // 로그인 여부
  const pageRef = useRef<HTMLDivElement>(null); // 페이지 엘리먼트

  // 컴포넌트 로드 시간 지연
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4초 지연
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [isLogin]);

  // 페이지 페이드 인
  useEffect(() => {
    if (!isLoading) {
      fadeInGSAP(pageRef);

      const localUser = localStorage.getItem("user");

      if (localUser) {
        const user = JSON.parse(localUser);
        login(user.email, user.pw);
      }
    }
  }, [isLoading, isLogin]);

  return (
    <div style={{ scrollbarColor: "#000000 #ffffff", scrollbarWidth: "thin" }}>
      {/* 페이지 로드 시간 동안 로딩 페이지를 렌더링 */}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div ref={pageRef}>
          {/* 회원가입 모달  */}
          {isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : null}
          {/* 로그인 중이라면 프로필를 / 로그인 중이 아니라면 로그인을 */}
          {isLogin ? (
            <Profile
              setIsLogin={setIsLogin}
              userData={userData}
              setUserData={setUserData}
            />
          ) : (
            <Login setIsSignUp={setIsSignUp} setIsLogin={setIsLogin} />
          )}
          ;
        </div>
      )}
    </div>
  );
};

export default MenberPage;
