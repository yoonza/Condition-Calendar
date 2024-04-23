import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// 타이핑 애니메이션 정의
const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ConditionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
  text-align: center;
  gap: 5%;
  font-weight: bold;
`;

export const DateContainer = styled.div`
  margin: auto 3px;
  flex-basis: 10em;
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight:bold;
  & > .year {
    width: 40%;
  }
  & > .month {
    width: 20%;
  }
  & > .date {
    width: 20%;
  }
  & > .day {
    width: 20%;
  }
`;

export const StarContainer = styled.div`
  margin: auto 3px;
  flex-basis: 7em;
  font-size: 30px;
  text-align: left;
  color:#FFD700;
`;

export const StyledLink = styled(Link)`
  width: 100px;
  font-size: 20px;
  text-decoration: none;
  padding: 10px;
  color: white;
  border-radius:5px; 
  background-color: lightgray;
  transition: background-color 0.3s; /* 배경색 전환 효과 추가 */
  
  &:hover {
    background-color: #00C73C; /* 마우스 호버 시 배경색 변경 */
  }
`;

export const EditCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  font-size: 20px;
  text-align: center;
  font-weight:bold;
  height: 50%;
  & > span {
    font-size: 25px;
    margin-top: 15px;
  }
`;

export const EditStarContainer = styled.div`
  & > button {
    font-size: 50px;
    padding: 2px;
    background: none;
    border: none;
    color: #FFD700;
  }
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  text-align: center;
`;

// ListPage
export const ListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

// 헤더에 애니메이션 적용
export const Header = styled.div`
  margin-top: 5%;
  font-weight: 700;
  font-size: 2em;
  color:#00C73C;
  overflow: hidden; /* 텍스트가 넘치는 경우를 방지하기 위해 숨김 처리 */
  white-space: nowrap; /* 줄 바꿈 방지 */
  animation: ${typingAnimation} 6s steps(80, end); /* 타이핑 애니메이션 적용 */
`;


export const ConditionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  margin-top: 5%;

  & > button {
    font-size: 20px;
    padding: 10px 30px;
    flex-basis: auto;
    color: white;
    background-color: white;
    transition: background-color 0.3s; /* 배경색 전환 효과 추가 */
    background-color: lightgray;
    border:none;
    border-radius: 5px;

    
    &:hover {
      background-color: #00C73C; /* 마우스 호버 시 배경색 변경 */
    }
  }
`;
