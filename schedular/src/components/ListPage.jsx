// 스케줄러 첫 화면 
import React from "react";
import ConditionList from "./ConditionList";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeWeek } from "../redux/slice";
import { ListPageContainer, Header, ConditionListContainer, ButtonContainer} from "../style/style";

const ListPage = () => {
  const dispatch = useDispatch();
  const baseDay = useSelector((state) => state.condition.baseDay);
  const today = dayjs(baseDay);
  return (
    <ListPageContainer>
      <Header>컨디션 스케줄러</Header>
      <br/>
      <br/>
      <ConditionListContainer>
        {[0, 1, 2, 3, 4, 5, 6].map((dayNum) => (
          <ConditionList
            key={today.add(dayNum, "day").toDate()}
            dayNum={dayNum}
          />
        ))}
      </ConditionListContainer>

      <ButtonContainer>
        <button
          onClick={() => {
            dispatch(changeWeek(-1));
          }}
        >
          Prev
        </button>

        <button
          onClick={() => {
            dispatch(changeWeek(+1));
          }}
        >
          Next
        </button>
      </ButtonContainer>
    </ListPageContainer>
  );
};
export default ListPage;