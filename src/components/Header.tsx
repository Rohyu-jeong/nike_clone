import { Link } from "react-router-dom"; // 라우트
import {
  headerNaviData,
  headerDetailsData,
  HeaderDetailsDataType,
} from "../data/headerData"; // 샘플데이터
import { MdOutlineArrowDropDown } from "react-icons/md"; // footer 등장 아이콘
import {
  // 스타일 시트
  headerStyle,
  headerLogoStyle,
  headerNaviStyle,
  headerNaviListStyle,
  headerLeftContentStyle,
  headerDetailsListStyle,
  headerFooterIconStyle,
} from "../style/components/headerStyle";
import { footerhandleClick } from "../event/footerClickhandle"; // footer 등장 핸들러

// props 타입
export type PropsType = {
  setIsFooter: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<PropsType> = ({ setIsFooter }: PropsType) => {
  // 헤더 메뉴 (네비게이트) 렌더링
  const naviElements = headerNaviData.map(
    (data: string, i: number): JSX.Element => {
      return (
        // to={`/${data}`} : 라우트 경로를 지정
        <Link key={i} to={`/${data}`} style={headerNaviListStyle}>
          {i === 0 ? "Home" : data}
        </Link>
      );
    }
  );

  // 헤더 상세메뉴 렌더링
  const detailsElements = headerDetailsData.map(
    (data: HeaderDetailsDataType, i: number): JSX.Element => {
      return (
        // to={`/${data}`} : 라우트 경로를 지정 + 해당 페이지의 각 컨텐츠로 즉시 이동을 구현해야함
        <Link key={data.id} to={data.url} style={headerDetailsListStyle}>
          {data.title}
        </Link>
      );
    }
  );

  return (
    <header style={headerStyle}>
      <div style={headerLeftContentStyle}>
        <img
          style={headerLogoStyle}
          src="/image/logo/Nike-Logo.png"
          alt="NIKE LOGO"
        />
        <ul style={headerNaviStyle}>{naviElements}</ul>
      </div>
      <div style={headerNaviStyle}>
        {detailsElements}
        <MdOutlineArrowDropDown
          onClick={() => footerhandleClick(setIsFooter)}
          style={headerFooterIconStyle}
        />
      </div>
    </header>
  );
};

export default Header;
