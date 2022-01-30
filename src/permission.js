import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

// // no redirect whitelist
const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // 设置标题
  document.title = getPageTitle(to.meta.title)

  // 从会话中获取用户登陆token
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 若用户已登录且访问的是登录页则跳转到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // 尝试获取用户信息
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // 清理token信息并跳转到登录页
          await store.dispatch('user/resetToken')
          Message.error(error || '获取用户信息失败')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    console.log('unlogin')
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 用户未登录，无法访问相关页面，跳转到登陆页
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
