import fetch from '@system.fetch'

const helper = {}

helper.request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    fetch.fetch({
      url: url,
      data: data,
      method: method,
      success: function (res) {
        resolve(JSON.parse(res.data))
      },
      fail: function (data) {
        reject(data)
      }
    })
  })
}

helper.get = (url, data) => {
  return helper.request('GET', url, data)
}

helper.post = (url, data) => {
  return helper.request('POST', url, data)
}

export default helper
