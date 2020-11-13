import axios from 'axios'

export function inaxios(config) {
  const instance = axios.create({
    baseURL: '找老师要',
    timeout: 5000
  })

  // 2.axios的拦截器

  // axios.interceptors全局拦截
  // 发送拦截
    instance.interceptors.request.use(config=>{
      // console.log(config)
      // 1.比如config中的一些信息不符合服务器要求
      // 2.比如每次发送网络请求时都希望在界面中显示一个请求图标
      // 3.某些网络请求（比如登陆（token）），必须携带一些特殊的信息
    return config  //拿到后一定要记着返回
    },err=>{

    })
    // 接受拦截
    instance.interceptors.response.use(res=>{
      // console.log(res)
     return res.data
    },err=>{
      console.log(err)
    })
  // 1.发送正常的网络请求
  return instance(config)
}

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://api.ahmq.net/app',
    timeout: 5000
  })

  // 2.axios的拦截器

  // axios.interceptors全局拦截
  // 发送拦截
    instance.interceptors.request.use(config=>{
      // console.log(config)
      // 1.比如config中的一些信息不符合服务器要求
      // 2.比如每次发送网络请求时都希望在界面中显示一个请求图标
      // 3.某些网络请求（比如登陆（token）），必须携带一些特殊的信息
    return config  //拿到后一定要记着返回
    },err=>{

    })
    // 接受拦截
    instance.interceptors.response.use(res=>{
      // console.log(res)  
     return res.data.data
    },err=>{
      console.log(err)
    })
  // 1.发送正常的网络请求
  return instance(config)
}