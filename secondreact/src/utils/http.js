import axios from 'axios';
import { Spin, message } from 'antd';
import querystring from 'querystring';



let LOADING;
function startLoading() {
    console.log("加载等待框");
}
function endLoading() {
    console.log("加载关闭框");
}
const Axios = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});

Axios.interceptors.request.use(
    (config) => {
        startLoading();
        if( config.method === 'post') {
            if (sessionStorage.getItem('fwqAdmin')) {
                config.data = querystring.stringify({
                    userId: JSON.parse(sessionStorage.getItem('fwqAdmin')).userId,
                    ...config.data
                })
                console.log(config);
            }
        } else if ( config.method === 'get') {
            if (sessionStorage.getItem('fwqAdmin')) {
               config.params = {
                   userId: JSON.parse(sessionStorage.getItem('fwqAdmin')).userId,
                   ...config.params
               }
            }
        }
        config.headers.Authorization = sessionStorage.getItem('fwqAdmin') ? JSON.parse(sessionStorage.getItem('fwqAdmin')).accessToken : '';

        return config;
    },
    error => {
        console.log(error);
        return Promise.reject('请求拦截报错信息' + error);
    }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        if(res.data.code === 0) {
            endLoading();
            return Promise.resolve(res);
        } else if( res.data.code === 1001 || res.data.code === 10005 || res.data.code === 1000 ) {
            console.log("请求错误");
            // 跳转到路由  首页
            // 并且在此输出错误信息
            return Promise.resolve(res);
        } else {
            // 关闭加载框，然后
            endLoading();
            return Promise.reject(res);
        }
    },
    error => {
        let str = error + '';
        if(str.search('timeout') !== -1) {

        } else {
           console.log(err);
        }
        endLoading();
        return Promise.reject(error);
    }
);