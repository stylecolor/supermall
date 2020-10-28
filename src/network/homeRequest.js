import { inaxios } from "./request";
export function getHomeData (){
  return inaxios({
    url:'/home/multidata',
    method:'get',
  })
}