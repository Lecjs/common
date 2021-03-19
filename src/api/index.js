import axios from 'axios'
import URLs from './URLs'
// axios.create Vue.entend
const instance = axios.create({
  method: "get",
  baseURL: URLs.baseURL,
  // http://api.duyiedu.com
  params: {
    appkey: "scavenge_1581066956311",
  },
});
// 截击机
instance.interceptors.response.use(function (res) {
  if(res.data.data) {
    return res.data.data;
  }
  return res.data;
})

function findByPage(page, size) {
    return instance({
        url: URLs.findByPage,
        params: {
            page,
            size
        }
    })
}

function updateStu(options) {
  return instance({
    url: URLs.updateStu,
    params: {
      ...options
    }
  })
}

function searchStu(search, page, size) {
  return instance({
    url: URLs.searchStu,
    params: {
      search,
      page,
      size,
      sex: -1
    }
  })
}
function addStu(options) {
  return instance({
    url: URLs.addStu,
    params: {
      ...options
    }
  })
}

function delStu(sNo) {
  return instance({
    url: URLs.delStu,
    params: {
      sNo
    }
  })
}


export default {
    findByPage,
    updateStu,
    searchStu,
    addStu,
    delStu
}
