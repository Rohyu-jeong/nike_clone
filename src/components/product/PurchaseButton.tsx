import { FaHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import {
  modalHeartStyle,
  modalPurchaseButtonBoxStyle,
  modalPurchaseButtonStyle,
} from "../../style/product/Modal";
import { UserType } from "../member/profile/Profile";
import { modifyWishlist, updateUserPoints } from "../../service/controller";
import { useState } from "react";

type PurchaseButtonProps = {
  isLiked: boolean;
  onHeartClick: () => void;
  selectedSize: number | null;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  userData: UserType;
  id: string[];
  name: string;
  price: string;
  sale: string;
  otherImages: string[];
  category: string;
  setReData: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isProfile: boolean;
  setPurchaseOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PurchaseButton: React.FC<PurchaseButtonProps> = ({
  isLiked,
  onHeartClick,
  selectedSize,
  setUserData,
  userData,
  id,
  name,
  sale,
  price,
  category,
  otherImages,
  setReData,
  setIsModalOpen,
  isProfile,
  setPurchaseOpen,
}) => {
  // 구매하기 버튼 이벤트
  const handleButtonClick = async () => {
    if (selectedSize) {
      console.log(`${selectedSize} 신발을 구매하였습니다.`);
      setPurchaseOpen(true);
      setTimeout(() => {
        setPurchaseOpen(false);
        window.alert(`${name} 상품 구매에 성공하였습니다. 
          적립된 포인트 : ${(parseInt(price) * 100) / 10}`);
      }, 1000);

      // 포인트 적립
      await updateUserPoints(
        userData.id,
        userData.points + (parseInt(price) * 100) / 10
      );
      setReData((prev) => !prev);
    } else {
      alert("사이즈를 선택해주세요.");
    }
  };

  //   위시리스트 이벤트
  const handleWish = (bool: boolean) => {
    if (bool) {
      // 위시리스트 추가
      userData.id !== ""
        ? modifyWishlist(
            userData.id,
            {
              id: id,
              title: name,
              sale: sale,
              price: price,
              category: category,
              image: otherImages,
              colorImg: [""],
            },
            true
          )
        : window.alert("로그인 후 이용가능합니다!");
      setReData((prev) => !prev);
    } else {
      // 위시리스트 삭제
      if (userData.id !== "") {
        modifyWishlist(
          userData.id,
          {
            id: id,
            title: name,
            sale: sale,
            price: price,
            category: category,
            image: otherImages,
            colorImg: [""],
          },
          false
        );
        isProfile && setIsModalOpen(false);
      } else {
        window.alert("로그인 후 이용가능합니다!");
      }
      setReData((prev) => !prev);
    }
  };

  return (
    <div style={modalPurchaseButtonBoxStyle}>
      {isLiked || isProfile ? (
        <FaHeart
          style={{
            ...modalHeartStyle,
            color: "red",
          }}
          onClick={() => {
            onHeartClick();
            handleWish(false);
          }}
        />
      ) : (
        <GoHeart
          style={{
            ...modalHeartStyle,
            color: modalHeartStyle.color,
          }}
          onClick={() => {
            onHeartClick();
            handleWish(true);
          }}
        />
      )}
      <button style={modalPurchaseButtonStyle} onClick={handleButtonClick}>
        구매하기
      </button>
    </div>
  );
};

export default PurchaseButton;
