import axios from "axios";

const api = {
  getFunnelChart: "/api/data/funnelChart",
};

export const getSpmData = (date: string) => {
  //TODO: 待定义返回数据格式
  return axios.get(api.getFunnelChart, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      date,
    },
  });
};
