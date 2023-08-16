import { ref } from 'vue'
import { defineStore } from 'pinia'

import { loginApi, getInfoApi } from '@/api/login'
import { setToken,removeToken } from '@/utils/auth'


export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const login = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      loginApi(username, password).then(res => {
        setToken(res.data.token)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  const getUserInfo = async () => {
    const res = await getInfoApi()
    userInfo.value = res.data
  }

  const logout = ()=>{
    //清除cooke
    removeToken()
    //清除userInfo
    userInfo.value = {}

  }

  return { userInfo, login,logout, getUserInfo }
})