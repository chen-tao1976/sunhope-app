import router from './router'

import { getToken } from '@/utils/auth'
import { useUserStore } from './stores/user';

const whiteList = ['/login', '/register'];



router.beforeEach(async (to, from, next) => {
    const token = getToken()
    //没有登录，强制登录
    if (!token && to.path !== "/login") {
        return next({ path: "/login" })
    }
    //防止重复登录
    if (token && to.path === "/login") {
        return next({ path: from.path ? from.path : "/" })
    }
    //用户已登录
    if (token) {
        const userStroe = useUserStore()
        userStroe.getUserInfo()
    }

    next()

})