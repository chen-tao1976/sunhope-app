import axios from 'axios'
import { ElNotification } from 'element-plus'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({  
    baseURL: '/api',   
    timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {

    const token = getToken()
    if(token){
      config.headers["token"] = token
    }
    return config
  }, 
  error => {     
    Promise.reject(error)
  }
)
  
  // 响应拦截器
service.interceptors.response.use(res => {
      return res.data
    },
    error => {     
      
      ElNotification({
        message:error.response.data.msg || "请求失败",
        type:"error",
        duration:3000
      })

      return Promise.reject(error)
    }
)



export default service
