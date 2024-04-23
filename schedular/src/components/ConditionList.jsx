// 날짜별 컨디션상태 리스트 화면(메인화면)
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConditionContainer, DateContainer , StarContainer, StyledLink } from "../style/style";
import { retrieveData, saveData } from "../network/dataService";
import { inputCurrentCondition } from "../redux/slice";

const ConditionList = ({ dayNum }) => {
  const dispatch = useDispatch();
  const [currentCondition, setConditionToday] = useState(0);
  const baseDay = useSelector((state) => state.condition.baseDay);
  const weekCurrent = useSelector((state) => state.condition.weekCurrent);
  const today = new Date(baseDay);
  today.setDate(today.getDate() + dayNum + weekCurrent);
  const Dates =
    today.toDateString() === new Date().toDateString();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const day = dayList[today.getDay()];

  const fetchData = async function (date) {
    try {
      const result = await retrieveData(date);
      return result;
    } catch {
      console.error("Error fetching data");
    }
  };

  const addData = async function (date) {
    try {
      const result = await saveData(date);
      console.log(result);
    } catch {
      console.error("Error adding data");
    }
  };

  useEffect(() => {
    fetchData(`${year}-${month}-${date}`).then((response) => {
      if (response.data.length !== 0) {
        setConditionToday(response.data[0].rate);
      } else {
        addData(`${year}-${month}-${date}`);
      }
    });
  }, [baseDay, dayNum, weekCurrent, year, month, date]);

  return (
    <ConditionContainer>
      <DateContainer Dates={Dates}>
        <span className="year">{year}.</span>
        <span className="month">{month}.</span>
        <span className="date">{date}.</span>
        <span className="day">({day})</span>
      </DateContainer>
      <StarContainer>
        {currentCondition ? "★".repeat(currentCondition) : ""}
      </StarContainer>
      <StyledLink
        to={`/Edit/${year}-${month}-${date}`}
        onClick={() => {
          dispatch(inputCurrentCondition(currentCondition));
        }}
      >
        수정
      </StyledLink>
    </ConditionContainer>
  );
};

export default ConditionList;
