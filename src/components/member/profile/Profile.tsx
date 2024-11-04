import { useEffect, useRef, useState } from "react";
import { profileContainerStyle } from "../../../style/member/profile";
import {
  getUserIdByEmail,
  updateUserName,
  updateUserPoints,
} from "../../../service/controller";
import { promotionData } from "../../../data/home/promotionData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import SetModal from "./SetModal";
import {
  productData,
  ProductDataType,
} from "../../../data/product/productData";
import ProductModal from "../../product/ProductModal";

type PropsType = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
};

// 유저 데이터 타입
export type UserType = {
  id: string;
  name: string;
  email: string;
  wishlist: ProductDataType[];
  points: number;
  date: string;
  avatarUrl: string;
};

// 프로필 페이지
const Profile = ({ setIsLogin, userData, setUserData }: PropsType) => {
  // 프로필 수정하기 모달 오픈 상태
  const [userSetModal, setUserSetModal] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const closeModal = () => setIsModalOpen(false);

  const [wishNum, setWishNum] = useState<number>(0);

  // 멤버 혜택 컨테이너 ref
  const memberRef = useRef<HTMLDivElement>(null);
  // 위시리스트 컨테이너 ref
  const wishRef = useRef<HTMLDivElement>(null);

  // 데이터 리로드 트리거
  const [reData, setReData] = useState<boolean>(false);

  // 로그아웃 이벤트
  const handleLogout = () => {
    const isLogout = window.confirm("로그아웃 하시겠습니까?");

    if (isLogout) {
      setIsLogin(false);
      localStorage.removeItem("user");
    }
  };

  // 스크롤 이벤트
  const handleScroll = (
    bool: boolean,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isNum: 1 | 2
  ) => {
    e.preventDefault();

    if (bool && isNum) {
      isNum === 1
        ? memberRef.current?.scrollTo({
            behavior: "smooth",
            left: 0,
          })
        : wishRef.current?.scrollTo({
            behavior: "smooth",
            left: 0,
          });
    } else {
      isNum === 1
        ? memberRef.current?.scrollTo({
            behavior: "smooth",
            left: memberRef.current.scrollWidth,
          })
        : wishRef.current?.scrollTo({
            behavior: "smooth",
            left: wishRef.current.scrollWidth,
          });
    }
  };

  // 위시리스트 상품 클릭 이벤트
  const handleModal = (i: number) => {
    setWishNum(i);
    setIsModalOpen(true);
  };

  // 로그인 유저 데이터 가져오기
  useEffect(() => {
    const loginUser = localStorage.getItem("user");

    if (loginUser) {
      const user = JSON.parse(loginUser);

      getUserIdByEmail(user.email)
        .then((userData) => {
          if (userData) {
            console.log("유저 데이터: ", userData);
            setUserData(userData);
          }
        })
        .catch((error) => {
          console.error("데이터 가져오기 에러: ", error);
        });
    }
  }, [reData]);

  // 위시리스트 상품 모달
  const wishModal = userData.wishlist.map((data, i) => {
    if (i === wishNum) {
      return (
        <div key={data.title}>
          <ProductModal
            isOpen={isModalOpen}
            onClose={closeModal}
            id={data.id}
            name={data.title}
            price={data.price}
            sale={data.sale}
            imgUrl={data.image[1]}
            category={data.category}
            otherImages={data.image}
            isLiked={isLiked}
            onHeartClick={() => setIsLiked(!isLiked)}
            setUserData={setUserData}
            userData={userData}
            setReData={setReData}
            setIsModalOpen={setIsModalOpen}
            isProfile={true}
          />
        </div>
      );
    }
  });

  console.log(wishModal);

  return (
    <section style={profileContainerStyle}>
      {/* 상단 라벨 */}
      <div className="w-full h-[10vh] bg-black text-white text-center content-center text-lg font-semibold tracking-widest">
        나이키의 멤버가 되어 혜택을 누려보세요!
      </div>
      {/* 프로필 정보 */}
      <div className="w-full h-fit px-24 mb-[50px]">
        <div className="w-full h-[25vh] flex justify-between items-center border-b-2 border-solid border-black">
          <div className="w-fit h-full flex gap-8 items-center">
            <div className="w-fit h-fit flex flex-col gap-4">
              {/* 멤버 이름 */}
              <h1 className="text-3xl font-semibold">{`${userData.name} 님`}</h1>
              <div>
                {/* 나이키 멤버 가입 */}
                <div className="text-gray-500">
                  <span>나이키 멤버 가입 날짜 : </span>
                  <span>{`${userData.date.slice(0, 10)} 가입`}</span>
                </div>
                {/* 포인트 */}
                <div className="text-gray-500">
                  <span>멤버 포인트 : </span>
                  <span>{`${userData.points.toFixed(0)} POINT`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit h-fit flex flex-col gap-4">
            <span
              className="w-[100px] h-fit py-2 px-4 bg-black text-white font-semibold rounded-md cursor-pointer text-center"
              onClick={() => handleLogout()}
            >
              로그아웃
            </span>
            <span
              className="w-[100px] h-fit py-2 px-4 bg-black text-white font-semibold rounded-md cursor-pointer text-center"
              onClick={() => setUserSetModal(true)}
            >
              수정
            </span>
          </div>
        </div>
      </div>

      {/* 멤버 혜택 */}
      <div className="w-full h-fit px-24 relative py-[100px] bg-black">
        {/* 타이틀 */}
        <h1 className="text-xl font-semibold py-4 text-white">멤버 혜택</h1>
        {/* 버튼 */}
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex justify-between items-center px-28 pt-6 text-[40px]">
          <button
            className="w-[50px] h-[50px] bg-white rounded-full relative z-[50] rotate-180 flex justify-center items-center"
            onClick={(e) => handleScroll(true, e, 1)}
          >
            <IoIosArrowRoundForward />
          </button>
          <button
            className="w-[50px] h-[50px] bg-white rounded-full relative z-[50] flex justify-center items-center"
            onClick={(e) => handleScroll(false, e, 1)}
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
        {/* 콘텐츠 */}
        <div
          className="w-full h-[50vh] whitespace-nowrap content-center overflow-x-auto overflow-y-hidden relative"
          style={{ scrollbarColor: "#fff #000", scrollbarWidth: "thin" }}
          ref={memberRef}
        >
          {/* 리스트 */}
          {promotionData.map((data, i) => (
            <Link to="/about">
              <div className="inline-block w-[20vw] h-[90%] mr-12 relative cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src={data.image}
                  alt={data.title}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-150 z-40"></div>
                <h2 className="absolute bottom-4 left-4 text-white font-semibold text-sm z-50">
                  {data.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 위시리스트 */}
      <div className="w-full h-fit px-24 relative py-[100px]">
        {/* 타이틀 */}
        <h1 className="text-xl font-semibold py-4">위시리스트</h1>
        {/* 버튼 */}
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex justify-between items-center px-28 pt-6 text-[40px]">
          <button
            className="w-[50px] h-[50px] bg-white rounded-full relative z-[50] rotate-180 flex justify-center items-center"
            onClick={(e) => handleScroll(true, e, 2)}
          >
            <IoIosArrowRoundForward />
          </button>
          <button
            className="w-[50px] h-[50px] bg-white rounded-full relative z-[50] flex justify-center items-center"
            onClick={(e) => handleScroll(false, e, 2)}
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
        {/* 콘텐츠 */}
        <div
          className="w-full h-[50vh] whitespace-nowrap content-center overflow-x-auto overflow-y-hidden relative"
          style={{ scrollbarColor: "#000000 #ffffff", scrollbarWidth: "thin" }}
          ref={wishRef}
        >
          {/* 리스트 */}
          {userData.wishlist && userData.wishlist.length === 0 ? (
            <h1 className="text-xl font-semibold text-gray-500 text-center">
              위시리스트가 없습니다.
            </h1>
          ) : (
            userData.wishlist.map((data, i) => (
              <div
                className="inline-block w-[20vw] h-[90%] mr-12 relative cursor-pointer"
                onClick={() => handleModal(i)}
              >
                <img
                  className="w-full h-full object-cover"
                  src={data.image[1]}
                  alt={data.title}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-150 z-40"></div>
                <h2 className="w-full h-fit absolute bottom-4 left-4 text-black text-center font-semibold text-sm z-50 pr-8">
                  {data.title}
                </h2>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-screen h-fit py-[50px] bg-black text-white mx-auto flex flex-col items-center gap-4">
        <Link to="/findStore">
          <span className="p-2 font-bold text-4xl border-b-2 border-white border-solid">
            나이키 매장 찾으러 가기
          </span>
        </Link>
        <span className="text-center p-2 font-bold text-xl">JSTU DO IT!</span>
      </div>
      {/* 프로필 수정하기 모달 */}
      {userSetModal && (
        <SetModal
          userData={userData}
          setUserSetModal={setUserSetModal}
          setReData={setReData}
        />
      )}
      {isModalOpen && (
        <div className="w-screen h-screen fixed top-0 botton-0 left-0 right-0 z-[999]">
          {wishModal}
        </div>
      )}
    </section>
  );
};

export default Profile;
