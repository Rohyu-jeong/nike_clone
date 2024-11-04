import { CSSProperties, useEffect, useState } from "react";
import {
  productImgStyle,
  productTitleStyle,
} from "../../style/product/Products";
import { root } from "../../style/root";
import ProductModal from "./ProductModal";
import { productData } from "../../data/product/productData";
import { UserType } from "../member/profile/Profile";

type ProductInfoProps = {
  id: string[];
  name: string;
  price: string;
  sale: string;
  category: string;
  imgUrl: string;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  userData: UserType;
};

const Product: React.FC<ProductInfoProps> = ({
  id,
  name,
  price,
  sale,
  category,
  imgUrl,
  setUserData,
  userData,
}: ProductInfoProps) => {
  const [hover, setHover] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 데이터 리로드 트리거
  const [reData, setReData] = useState<boolean>(false);
  const [demo, setDemo] = useState(false);

  // 제품 호버
  const productHoverStyle: CSSProperties = {
    position: root.absolute,
    width: root.fullSize,
    height: root.fullSize,
    backgroundColor: root.gray50,
    cursor: root.pointer,
    display: root.flex,
    flexDirection: root.column,
    justifyContent: root.center,
    alignItems: root.center,
    gap: root.gap30,
    color: root.black100,
    top: root.zero,
    left: root.zero,
    opacity: hover ? 0.7 : 0,
    fontSize: root.font20,
    fontWeight: "700",
  };

  return (
    <div
      style={productTitleStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img style={productImgStyle} src={imgUrl} alt={name} />
      <div style={productHoverStyle} onClick={openModal}>
        <span>{name}</span>
        <span>{price}원</span>
        <span>{sale === "0" ? `` : `${sale}% 할인`}</span>
      </div>
      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          id={id}
          name={name}
          price={price}
          sale={sale}
          imgUrl={imgUrl}
          category={category}
          otherImages={
            productData.find((img) => img.title === name)?.image.slice(1) || []
          }
          isLiked={isLiked}
          onHeartClick={() => setIsLiked(!isLiked)}
          setUserData={setUserData}
          userData={userData}
          setReData={setReData}
          setIsModalOpen={setDemo}
          isProfile={false}
        />
      )}
    </div>
  );
};

export default Product;
