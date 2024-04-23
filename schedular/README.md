# Weekly Condition Schedular

⚒️ Tech Stacks</br></br>
1️⃣ React</br>
2️⃣ Redux</br>
3️⃣ Style-Components</br>
4️⃣ Mock-API</br>
5️⃣ React-router-dom</br><hr>
</br></br>

📄 db.json</br></br>

```json
{
  "conditions": [
    {
      "id": "0",
      "date": "2024-04-15",
      "rate": 2
    },
    {
      "id": "1",
      "date": "2024-04-16",
      "rate": 3
    },
    {
      "id": "2",
      "date": "2024-04-17",
      "rate": 3
    },
    {
      "id": "3",
      "date": "2024-04-18",
      "rate": 1
    },
    {
      "id": "4",
      "date": "2024-04-19",
      "rate": 3
    },
    {
      "id": "5",
      "date": "2024-04-20",
      "rate": 3
    },
    {
      "id": "6",
      "date": "2024-04-21",
      "rate": 5
    },
  ]
}
```
</br></hr></br></br>
📄 Condition</br></br>
- ListPage(with ConditionList)</br>
⁉️ Listpage: 컨디션 별점 리스트와 EditPage로 넘어갈 수 있는 수정버튼으로 표시된 화면</br>
⁉️ ConditionList: Listpage 부분의 컨디션 별점 리스트 표시 화면</br>
1️⃣ 오늘의 요일이 가장 위에 오도록 할 것.(+ Use Index)</br>
2️⃣ Redux로 저장해둔 날짜별 상태 리스트를 화면에 표시할 것.</br>
3️⃣ 이전주와 다음주 페이지를 추가할 것.</br>
- EditPage(with ChangeStarPage)</br>
⁉️ EditPage: 수정하기 위하여 선택한 날짜와 컨디션 별점이 표시된 화면</br>
⁉️ ChangeStarPage: 별점 리스트 수정 화면</br>
1️⃣ 별점 직접 선택 대신 숫자키로 별점 개수 지정 가능하게 할 것.</br>
2️⃣ 평점 입력 or 수정 후, window.alert 기능으로 알림을 사용할 것.</br>
3️⃣ 데이터 관리 저장소는 Mock-API를 통해 관리할 것(Axios를 활용해 데이터 요청)</br><hr/>
</br></br>

