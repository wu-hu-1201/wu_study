// axios(config)
// axios.method(url, data, config)

axios.interceptors.request.use(
    (config) => {
        // 对请求数据做些什么
        return config
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        // 对响应数据做些什么
        
        return res
    },
    (error) => {
        // 对响应错误做些什么
        return Promise.reject(error)

    }
)