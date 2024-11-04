import {
  PromotionDataType,
  promotionData,
} from "../../data/home/promotionData"; // 데이터
import { IoIosArrowForward } from "react-icons/io"; // 화살표 아이콘
import {
  promotionContainerStyle,
  promotionIconStyle,
  promotionImgStyle,
  promotionImgStyle1,
  promotionImgStyle2,
  promotionImgStyle3,
  promotionImgStyle4,
  promotionImgStyle5,
  promotionImgStyle6,
  promotionImgStyle7,
  promotionImgStyle8,
  promotionTextStyle,
  promotionTitleStyle,
} from "../../style/home/promotionStyle"; // 스타일 시트
import { Link } from "react-router-dom";

// 스타일 시트 배열
const styles = [
  promotionImgStyle1,
  promotionImgStyle2,
  promotionImgStyle3,
  promotionImgStyle4,
  promotionImgStyle5,
  promotionImgStyle6,
  promotionImgStyle7,
  promotionImgStyle8,
];

const Promotion: React.FC = () => {
  // 각 콘텐츠 생성
  const promotionItems = promotionData.map(
    (data: PromotionDataType, i: number): JSX.Element => {
      return (
        <div style={{ ...promotionImgStyle, ...styles[i] }} key={data.id}>
          <Link to="/about">
            <img style={promotionImgStyle} src={data.image} alt={data.title} />
            <div style={promotionTextStyle}>
              <span>{data.theme}</span>
              <h1 style={promotionTitleStyle}>{data.title}</h1>
              <div style={promotionIconStyle}>
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        </div>
      );
    }
  );

  return <section style={promotionContainerStyle}>{promotionItems}</section>;
};

export default Promotion;
