// import request from '@/utils/request'

export function login(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve({ data: { msg: '成功', code: 200 }}) }, 1000)
  })
}

export function getInfo(token) {

}

export function logout() {

}
