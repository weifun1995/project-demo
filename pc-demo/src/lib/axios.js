import axios from "axios"

const instance = axios.create({
    baseURL: "",
    timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
    // 可以统一添加请求头token
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
    return res.data
}, err => {

    return Promise.reject(err)
})


export default instance
