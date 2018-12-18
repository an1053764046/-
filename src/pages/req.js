import axios from 'axios'

//服务器接口地址
export const SERVER_IP = 'http://192.168.199.192:3333'
//资源服务器地址
export const SOURCES_IP = 'http://192.168.199.192:3344'

//    api: 请求api地址
// callback: 成功的回调函数
// param: 传递的参数,默认为空对象
// methods: 请求方法,默认get
export function req(api, callback, params = {}, methods = 'get'){
    //封装请求地址
    let reqUrl = SERVER_IP + api

    //根据请求类型，调用不同axiosAPI
    if(methods.toUpperCase() === 'GET'){
        axios.get(reqUrl, { params}  ).then(callback)
    }else if(methods.toUpperCase() === 'POST'){
        axios.post(reqUrl, params).then(callback)
    }

}