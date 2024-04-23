// 수정페이지의 별점 수정화면
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { inputCurrentCondition } from "../redux/slice";
import { EditCardDiv, EditStarContainer } from "../style/style";

const ChangeStar = () => {
  const dispatch = useDispatch();
  const { date } = useParams();
  const currentCondition = useSelector((state) => state.condition.currentCondition);

  // 현재 별점 상태를 Redux 저장상태에서 가져오자.
  const [starList, setStarList] = useState([]); 

  // 페이지 로드 시 실행되는 효과의 함수
  useEffect(() => {
    // 현재 별점을 기반으로 별 모양 생성)
    const stars = Array(5).fill(0).map((_, index) => (index < currentCondition ? 1 : 0));
    setStarList(stars);
  }, [currentCondition]);

  // 별을 클릭하여 별점을 변경하는 함수
  const handleStarClick = (index) => {
    dispatch(inputCurrentCondition(index + 1));
  };

  return (
    <EditCardDiv>
      <span>{date}</span>
      <EditStarContainer>
        {starList.map((bin, idx) => (
          <button
            key={idx}
            onClick={() => handleStarClick(idx)}
          >
            {bin ? "★" : "☆"}
          </button>
        ))}
      </EditStarContainer>
    </EditCardDiv>
  );
};

export default ChangeStar;
