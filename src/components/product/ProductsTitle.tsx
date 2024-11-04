import { useEffect, useRef, useState } from "react";
import { productData, ProductDataType } from "../../data/product/productData";
import {
  productsMainsStyle,
  sectionNewtStyle,
} from "../../style/product/Products";
import { UserType } from "../member/profile/Profile";
import FilterSideBar from "./FilterSideBar";
import Product from "./Product";
import gsap from "gsap";

type PropsType = {
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  userData: UserType;
};

const Products = ({ setUserData, userData }: PropsType) => {
  // 필터링 된 데이터
  const [filterData, setFilterData] = useState<ProductDataType[]>(productData);
  // 데이터 수에 비례한 그리드 열의 수
  const [isCol, setIsCol] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);

  // 마우스 무브 핸들러
  const handleMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const sectionRefWidth = sectionRef.current?.offsetWidth;
    const windowHeight = window.innerHeight;

    if (sectionRefWidth && windowHeight) {
      // 마우스의 현재 위치를 0~1 사이의 값으로 변환
      const mouseX = e.clientX / sectionRefWidth;
      const mouseY = e.clientY / windowHeight;

      // 목표 스크롤 위치 계산 (전체 문서 크기를 기준으로)
      const targetX =
        mouseX * sectionRef.current?.scrollWidth - sectionRefWidth / 2;
      const targetY =
        mouseY * document.documentElement.scrollHeight - windowHeight / 2;

      // GSAP을 사용하여 스크롤 애니메이션 적용
      gsap.to(window, {
        scrollTo: {
          y: targetY,
        },
        duration: 3, // 애니메이션 지속 시간
        ease: "power3.out", // 애니메이션 가속도 곡선
      });

      // GSAP을 사용하여 스크롤 애니메이션 적용
      gsap.to(sectionRef.current, {
        scrollTo: {
          x: targetX,
        },
        duration: 3, // 애니메이션 지속 시간
        ease: "power3.out", // 애니메이션 가속도 곡선
      });
    }
  };

  useEffect(() => {
    filterData.length <= 20 ? setIsCol(true) : setIsCol(false);

    console.log(isCol);
  }, [filterData]);

  // 사이드바(필터), 신제품, 신발, 의류, 용품
  return (
    <main
      ref={sectionRef}
      style={productsMainsStyle}
      onMouseMove={(e) => handleMove(e)}
    >
      <FilterSideBar setFilterData={setFilterData} />
      <section
        style={{
          ...sectionNewtStyle,
          gridTemplateColumns: isCol ? "repeat(5, 1fr)" : "repeat(10, 1fr)",
        }}
      >
        {filterData.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            name={product.title}
            price={product.price}
            sale={product.sale}
            category={product.category}
            imgUrl={product.image[0]}
            setUserData={setUserData}
            userData={userData}
          />
        ))}
      </section>
    </main>
  );
};

export default Products;
