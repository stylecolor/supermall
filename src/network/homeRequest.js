import { inaxios } from "./request";
export function getHomeData (){
  return inaxios({
    url:'/home/multidata',
    method:'get',
  })
}
export function getHomeGoods(type,page){
  return inaxios({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
// export function getHomeGoods(page,limit){
//   return request({
//     url:'/aq5qn9999/Form.query',
//     params:{
//       page,
//       limit
//     }
//   })
// }