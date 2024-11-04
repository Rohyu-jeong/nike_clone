import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "./db";
import { ProductDataType } from "../data/product/productData";

/*
  서버리스 환경에서는 데이터가 엑셀처럼 저장되지 않고 문서 형태로 하나의 유저 데이터가 하나의 문서에 저장됩니다

  컬렉션은 해당 문서들을 저장하는 집합입니다 (db에서 테이블과 비슷한 개념입니다)
*/

// 유저 데이터 생성 및 데이터베이스 추가 - 회원가입 ------------------------
export async function saveUserProfile(
  id: string,
  name: string,
  email: string,
  wishlist: ProductDataType[] = [], // 위시리스트에 상품 데이터를 객체 배열로 타입 단언
  points: number = 0,
  date: string = new Date().toISOString(), // 기본값으로 현재 날짜를 ISO 문자열로 설정
  avatarUrl: string = "/image/logo/Nike-Logo2.png"
) {
  try {
    // 'users' 컬렉션에 데이터 추가
    const docRef = await addDoc(collection(db, "users"), {
      id: id,
      name: name,
      email: email,
      wishlist: wishlist,
      points: points,
      date: date,
      avatarUrl: avatarUrl,
    });
    console.log("추가된 유저의 아이디: ", docRef.id);
  } catch (error) {
    console.error("에러 발생 : ", error);
  }
}

// Firestore에서 특정 이메일로 데이터 읽기 -----------------
export async function getUserIdByEmail(email: string) {
  // 로그인 한 유저의 데이터를 조회하는 쿼리
  const q = query(collection(db, "users"), where("email", "==", email));

  try {
    const querySnapshot = await getDocs(q);

    // 해당 쿼리문으로 get요청을 했을 때 반환값이 없다면
    if (querySnapshot.empty) {
      console.log("해당 이메일과 일치하는 사용자가 없습니다.");
      return null;
    }

    let user = null;
    querySnapshot.forEach((doc) => {
      const data = doc.data(); // 유저의 데이터에 접근
      user = { ...data, id: doc.id }; // 데이터 문서 id로 변경하여 반환 (데이터 업데이트할 때 문서 id로 해당 유저의 문서를 식별하기 때문)
    });

    return user;
  } catch (error) {
    console.error("데이터 조회 중 오류 발생: ", error);
    return null;
  }
}

// 유저의 위시리스트 아이템을 추가 또는 제거
export async function modifyWishlist(
  id: string,
  item: ProductDataType,
  isModify: boolean
) {
  const userDocRef = doc(db, "users", id); // 특정 유저의 문서 참조

  try {
    if (isModify) {
      // 아이템 추가 - 해당 문서에 wishlist라는 키를 가진 엔트리의 값에 상품 데이터를 추가
      await updateDoc(userDocRef, {
        wishlist: arrayUnion(item),
      });
      console.log(`아이템이 찜 목록에 추가되었습니다: ${item}`);
    } else {
      // 아이템 제거 - 해당 문서에 wishlist라는 키를 가진 엔트리의 값들 중 해당 상품을 삭제
      await updateDoc(userDocRef, {
        wishlist: arrayRemove(item),
      });
      console.log(`아이템이 찜 목록에서 제거되었습니다: ${item}`);
    }
  } catch (error) {
    console.error("위시리스트 수정 중 오류 발생:", error);
  }
}

// 유저 포인트 업데이트 함수 --------------------------------------
export async function updateUserPoints(id: string, points: number) {
  // 특정 문서를 참조
  const userDocRef = doc(db, "users", id);

  try {
    const userDoc = await getDoc(userDocRef);

    // 해당 문서가 존재한다면 - 해당 유저의 데이터가 존재한다면
    if (userDoc.exists()) {
      // 해당 문서의 points 키를 가진 엔트리의 값을 업데이트
      await updateDoc(userDocRef, { points: points });
      console.log("포인트가 업데이트되었습니다.");
    } else {
      console.error("해당 문서ID에 대한 문서가 없습니다.");
    }
  } catch (error) {
    console.error("포인트 업데이트 중 에러 발생: ", error);
  }
}

// 유저의 이름을 변경
export async function updateUserName(id: string, name: string) {
  // 특정 문서를 참조
  const userDocRef = doc(db, "users", id);

  try {
    const userDoc = await getDoc(userDocRef);

    // 해당 문서가 존재한다면
    if (userDoc.exists()) {
      // 해당 문서의 name 키의 엔트리 값에 변경될 새로운 이름을 전달하여 업데이트
      await updateDoc(userDocRef, { name: name });
      console.log("이름이 업데이트되었습니다.");
    } else {
      console.error("해당 문서ID에 대한 문서가 없습니다.");
    }
  } catch (error) {
    console.error("이름 업데이트 중 에러 발생: ", error);
  }
}
