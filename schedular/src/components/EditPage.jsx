// 수정페이지 화면 
import React, { useState } from "react";
import ChangeStar from "./ChangeStarPage";
import { Header, ButtonContainer, EditContainer, StyledLink } from "../style/style";
import { useDispatch, useSelector } from "react-redux";
import { inputCurrentCondition } from "../redux/slice";
import { useParams } from "react-router-dom";
import { modifyData } from "../network/dataService";

const EditPage = () => {
  const dispatch = useDispatch();
  const { date } = useParams();

  const currentCondition = useSelector((state) => state.condition.currentCondition);

  const [showAlert, setShowAlert] = useState(false);

  const handleSaveStars = () => { // 변경한 별 저장하기
    modifyData(date, currentCondition);
    setShowAlert(true);
    window.alert("별점이 수정되었습니다.");
  };

  const handleKeyPress = (e) => { // 엔터키로 경고창 확인 버튼 handle 가능 
    if (e.key === "Enter") {
      handleSaveStars();
    }
  };

  return (
    <EditContainer>
      <Header>수정 페이지</Header>
      <ChangeStar />
      <ButtonContainer>
        <StyledLink to="..">뒤로가기</StyledLink>
        <button onClick={() => dispatch(inputCurrentCondition(0))}>초기화</button>
        <button onClick={handleSaveStars}>저장하기</button>
      </ButtonContainer>
      <input
        type="text"
        value={showAlert}
        onChange={(e) => setShowAlert(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ display: "none" }} // 화면에 보이지 않도록 설정
      />
    </EditContainer>
  );
};

export default EditPage;
