import getAxios from "./API";

export async function modifyData(date, rate) {
  let response = null;
  const data = {
    date: date,
    rate: rate,
  };
  response = await getAxios.put(`./${date}`, data);
  return response;
} // 데이터 수정 

export async function retrieveData(date) {
  let response = null;
  const params = {
    date,
  };
  response = await getAxios.get("./", { params: params });
  return response;
} // 데이터 요청

export async function saveData(date) {
  let response = null;
  const data = {
    id: date,
    date: date,
    rate: 0,
  };
  response = await getAxios.post("./", data);
  return response;
} // 데이터 저장
