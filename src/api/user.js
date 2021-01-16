import request from '@/utils/request'

// 激活
export function activeUser(active) {
  return request({
    url: '/ums/user/active',
    method: 'post',
    data: active
  })
}

// 用户主页
export function getInfoByName(username, page, size) {
  return request({
    url: '/ums/user/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}

// 用户主页
export function getInfo() {
  return request({
    url: '/ums/user/info',
    method: 'get'
  })
}

// 更新
export function update(user) {
  return request({
    url: '/ums/user/update',
    method: 'post',
    data: user
  })
}
