import axios from "axios";
// import Vue from "vue";
// import { Message } from "element-ui";

const service = axios.create({
  baseURL: "http://10.31.1.145:7777"
});
// service.interceptors.response.use(
//   response => {
//     if (response.status >= 200 && response.status < 300) {
//       return response;
//     }
//   },
//   error => {
//     const response = error.response;
//     const { status, statusText, config } = response;
//     const errortext = statusText;
//     if (status != "404") {
//       Message({ type: "error", message: errortext });
//     }
//   }
// );
// {6224228C-D2D6-4507-B79D-9769E236D547} 行业资讯
// {72045042-F4EA-44C5-9703-88779CF530F8} 巴马动态
// 请求banner对应的guid
export const GUIDS = {
  trade: "{6224228C-D2D6-4507-B79D-9769E236D547}",
  news: "{72045042-F4EA-44C5-9703-88779CF530F8}"
};

// 获取新闻文章
export const getNewsList = dto => {
  return service.post("/api/view/GetArticleList", dto).then(res => res.data);
};
// 获取新闻明细
// export const getNewsDetails = (params) => { return service.get('/api/view/GetArticledetailByID', { params: params }).then(res => res.data) }
// 上一页与下一页
// export const getFiestNextdetail = (params) => { return service.get('/api/view/GetFiestNextdetail', { params: {GUID:params.GUID,fileType:params.fileType} }).then(res => res.data) }
