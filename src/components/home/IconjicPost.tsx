import { PostDataType, postDatas } from "../../data/home/postData"; // 데이터
import {
  iconicPostContainerStyle,
  iconicPostStyle1,
  iconicPostStyle2,
  iconicPostStyle3,
  iconicPostStyle4,
  iconicPostStyle5,
  iconicPostStyle6,
  iconicPostStyle7,
  iconicPostStyle8,
  iconicPostStyle9,
  iconicPostText,
  iconicPostTitle,
  iconicPostimgStyle,
} from "../../style/home/iconicPostStyle";
import { IoIosArrowForward } from "react-icons/io";

// 스타일 시트 배열 - grid 배치 속성 
const styles = [
  iconicPostStyle1,
  iconicPostStyle2,
  iconicPostStyle3,
  iconicPostStyle4,
  iconicPostStyle5,
  iconicPostStyle6,
  iconicPostStyle7,
  iconicPostStyle8,
  iconicPostStyle9,
];

const IconicPost: React.FC = () => {
  // 포스터 생성
  const posts = postDatas.map((data: PostDataType, i: number) : JSX.Element => {
    return (
      <div style={styles[i]} key={data.id}>
        <img style={iconicPostimgStyle} src={data.image} alt={data.title} />
        <h1 style={iconicPostTitle}>
          {data.title} 바로가기
          <IoIosArrowForward />
        </h1>
        <p style={iconicPostText}>{data.explanation}</p>
      </div>
    );
  });

  return <section style={iconicPostContainerStyle}>{posts}</section>;
};

export default IconicPost;
