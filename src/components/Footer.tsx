import { MdArrowDropUp } from "react-icons/md"; // 푸터 숨김 아이콘
import {
  footerStyle,
  footerLogoStyle,
  footerContentContainerStyle,
  footerContentBoxStyle,
  footerListBoxStyle,
  footerTitleStyle,
  footerItemStyle,
  footerPolicyStyle,
  footerHiddenStyle,
  footerDeleteIconStyle,
} from "../style/components/footerStyle";
import { footerData } from "../data/footerData"; // 푸터 데이터
import { Link } from "react-router-dom";
import { footerhandleClick } from "../event/footerClickhandle";

// 상품 데이터 타입
type ProductType = {
  id: string;
  title: string;
  item_list: ProductItemType[];
};
// 상품 리스트 데이터 타입
type ProductItemType = {
  name: string;
  to: string;
};

// 정보 데이터 타입
type InformationType = {
  id: string;
  title: string;
  item_list: InformationItemType[];
};

// 정보 리스트 데이터 타입
type InformationItemType = {
  name: string;
  to: string;
};

// 이용약관 데이터 타입
type PolicyType = {
  id: string;
  content: string;
  to: string;
};

// props 타입
type PropsType = {
  isFooter: boolean;
  setIsFooter: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer: React.FC<PropsType> = ({ isFooter, setIsFooter }: PropsType) => {
  // 리스트 렌더링 함수
  function makeList(datas: ProductType[] | InformationType[]): JSX.Element[] {
    return datas.map((data: ProductType | InformationType): JSX.Element => {
      return (
        <ul key={data.id} style={footerListBoxStyle}>
          <span style={footerTitleStyle}>{data.title}</span>
          {data.item_list.map((item: ProductItemType): JSX.Element => {
            return (
              // item.to : 경로 지정
              <Link to={`/${item.to}`} style={footerItemStyle}>
                {/* 호버 구현을 위해 <li> 요소 선언 */}
                <li className="footer-list">{item.name}</li>
              </Link>
            );
          })}
        </ul>
      );
    });
  }

  // 상품 리스트 렌더링
  const productListElement: JSX.Element[] = makeList(footerData.products);
  // 정보 리스트 렌더링
  const informationElement: JSX.Element[] = makeList(footerData.information);

  // 이용약관 , 방침 리스트 렌더링
  const policyElement: JSX.Element[] = footerData.company_policy.map(
    (policy: PolicyType): JSX.Element => {
      return <li key={policy.id}>{policy.content}</li>;
    }
  );

  

  return (
    // 푸터 등장 상태에 따라 숨김처리 스타일
    <footer style={isFooter ? footerStyle : footerHiddenStyle}>
      <img
        style={footerLogoStyle}
        src="/image/logo/Nike-Logo2.png"
        alt="Nike LOGO"
      />
      <div style={footerContentContainerStyle}>
        <div style={footerContentBoxStyle}>{productListElement}</div>
        <div style={footerContentBoxStyle}>{informationElement}</div>
        <ul style={footerPolicyStyle}>{policyElement}</ul>
      </div>
      <MdArrowDropUp
        style={footerDeleteIconStyle}
        onClick={() => {
          footerhandleClick(setIsFooter);
        }}
      />
    </footer>
  );
};

export default Footer;
