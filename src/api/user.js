// import request from '@/utils/request'

export function login(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve({ data: { msg: '成功', code: 200, token: 'login-mock' }}) }, 1000)
  })
}

export function getInfo(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { name: 'Jack', avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg' }})
    }, 300)
  })
}

export function logout() {

}
