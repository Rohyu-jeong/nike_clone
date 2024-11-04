import { useRef } from "react";
import { UserType } from "./Profile";
import { updateUserName } from "../../../service/controller";

type PropsType = {
  setUserSetModal: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserType;
  setReData: React.Dispatch<React.SetStateAction<boolean>>;
};

// 프로필 수정하기 모달
const SetModal = ({ userData, setUserSetModal, setReData }: PropsType) => {
  const nemeRef = useRef<HTMLInputElement>(null); // 이름 입력 ref

  // 수정 사항 저장 이벤트
  const handleSet = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const newName = nemeRef.current?.value;

    const isSet = window.confirm("정보를 수정하시겠습니까?");

    if (isSet && newName && newName !== "") {
      await updateUserName(userData.id, newName);
      setReData((prev) => !prev);
      window.alert("정보가 변경되었습니다.");
      setUserSetModal(false);
    } else {
      window.alert("입력값이 없습니다!");
    }
  };
  return (
    <div className="w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-[999] flex justify-center items-center">
      {/* 오버레이 */}
      <div
        className="w-full h-full bg-black/50 absolute -z-10"
        onClick={() => setUserSetModal(false)}
      ></div>
      {/* 모달 */}
      <div className="w-[30vw] h-fit py-12 bg-white px-4 flex flex-col items-center justify-center gap-12 rounded-lg">
        {/* 이름 */}
        <div className="w-full h-[50px] flex flex-col items-center gap-2">
          <label className="font-semibold text-xl" htmlFor="">
            이름 변경
          </label>
          <input
            ref={nemeRef}
            className="w-full h-fit p-2 text-center rounded-lg outline-none border-2 border-solid border-black"
            type="text"
            placeholder={userData.name}
          />
        </div>

        {/* 버튼 */}
        <button
          onClick={(e) => handleSet(e)}
          className="w-full h-[50px] bg-black rounded-lg text-white text-lg font-semibold"
        >
          저장하기
        </button>

        <p className="text-center text-sm text-gray-500">
          나이키 멤버의 개인 정보는 SNS 홍보성 마켓팅 메신저, 결제 서비스 등
          외에 사용되지 않으며 자세한 사항은 나이키 개인정보처리방침을
          읽어주시길 바랍니다.
        </p>
      </div>
    </div>
  );
};

export default SetModal;
