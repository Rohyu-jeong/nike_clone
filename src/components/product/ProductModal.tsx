import React, { useEffect, useState } from "react";
import {
  modalOverlayStyle,
  modalContainerStyle,
  modalContentStyle,
  modalImgBoxStyle,
  modalImgStyle,
  modalInfoStyle,
  modalNameStyle,
  modalCatalStyle,
  modalPriceBoxStyle,
  modalCurrentPriceStyle,
  modalDiscountRateStyle1,
  modalDiscountRateStyle2,
  modalOriginPriceStyle,
  modalInfoImageBoxStyle,
  modalInfoImageStyle,
  modalPriceBoxStyle2,
} from "../../style/product/Modal";
import PurchaseButton from "./PurchaseButton";
import ProductSizeOption from "./ProductSizeOption";
import { UserType } from "../member/profile/Profile";

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string[];
  name: string;
  price: string;
  sale: string;
  imgUrl: string;
  category: string;
  otherImages: string[];
  isLiked: boolean;
  onHeartClick: () => void;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  userData: UserType;
  setReData: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isProfile: boolean;
};

const ProductModal = ({
  isOpen,
  onClose,
  id,
  name,
  price,
  sale,
  imgUrl,
  category,
  otherImages,
  isLiked,
  onHeartClick,
  setUserData,
  userData,
  setReData,
  setIsModalOpen,
  isProfile,
}: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // 구매 모달 오픈 상태
  const [purchaseOpen, setPurchaseOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      console.log("ProductModal Props:", {
        name,
        price,
        sale,
        imgUrl,
        otherImages,
        category,
        id,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // 가격 및 할인율 계산
  const originalPrice = parseInt(price.replace(/,/g, ""), 10);
  const salePercentage = parseInt(sale, 10);
  const discountedPrice =
    salePercentage > 0
      ? originalPrice - (originalPrice * salePercentage) / 100
      : originalPrice;

  if (purchaseOpen) {
    return (
      <div style={modalOverlayStyle}>
        <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
          <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <div className="w-[100px] h-[100px] border-[10px] border-dashed border-gray-500 animate-spin rounded-full"></div>
            <h1>결제가 진행 중 입니다.</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalContentStyle}>
          <div style={modalImgBoxStyle}>
            <img style={modalImgStyle} src={imgUrl} alt={name} />
          </div>
          <div style={modalInfoStyle}>
            <div style={modalCatalStyle}>
              <span>{id}</span>
              <span>{category}</span>
            </div>
            <div style={modalNameStyle}>{name}</div>
            <div style={modalPriceBoxStyle}>
              {salePercentage > 0 ? (
                <>
                  <span style={modalOriginPriceStyle}>
                    {originalPrice.toLocaleString()}원
                  </span>
                  <div style={modalPriceBoxStyle2}>
                    <span style={modalCurrentPriceStyle}>
                      {discountedPrice.toLocaleString()}원
                    </span>
                    <div>
                      <span style={modalDiscountRateStyle1}>
                        {salePercentage}%
                      </span>
                      <span style={modalDiscountRateStyle2}>SALE</span>
                    </div>
                  </div>
                </>
              ) : (
                <span style={modalCurrentPriceStyle}>
                  {originalPrice.toLocaleString()} 원
                </span>
              )}
              <div>
                <ProductSizeOption onSizeSelect={setSelectedSize} />
              </div>
            </div>
            <div style={modalInfoImageBoxStyle}>
              {otherImages.map((imgSrc, index) => (
                <img
                  key={index}
                  style={modalInfoImageStyle}
                  src={imgSrc}
                  alt={`이미지 ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <PurchaseButton
          isLiked={isLiked}
          onHeartClick={onHeartClick}
          selectedSize={selectedSize}
          setUserData={setUserData}
          userData={userData}
          id={id}
          name={name}
          price={price}
          sale={sale}
          otherImages={otherImages}
          category={category}
          setReData={setReData}
          setIsModalOpen={setIsModalOpen}
          isProfile={isProfile}
          setPurchaseOpen={setPurchaseOpen}
        />
      </div>
    </div>
  );
};

export default ProductModal;
