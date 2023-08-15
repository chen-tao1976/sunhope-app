import { ref } from 'vue'
import { defineStore } from 'pinia'

import { loginApi, getInfoApi } from '@/api/login'
import { setToken } from '@/utils/auth'


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

  return { userInfo, login, getUserInfo }
})