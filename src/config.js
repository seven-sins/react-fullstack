import axios from 'axios';
import { Toast } from 'antd-mobile';
import localStore from 'store';
import { modal } from 'antd-mobile';

const domain = 'http://127.0.0.1:8080';
/**
 * 拦截请求
 */
axios.interceptors.request.use( config => {
    Toast.loading('加载中', 0);
    config.url = domain + config.url; 
    config.headers = { Authorization: localStore.get('token') };
    return config;
})

/**
 * 拦截响应
 */
axios.interceptors.response.use( config => {
    Toast.hide();
    return config;
}, error => {
    Toast.hide();
    if(error && error.response && error.response.data){
        Toast.fail(error.response.data.message, 2, null);
    }
    //else if(error && error.response && error.response.status === 500){
    //   Toast.fail(error.response.data.message, 2, null);
    //}

    // 不将错误信息返回到then
    return new Promise(() => {}); 
})

/**
 * 提示信息
 */
export function alert(message) {
    Toast.info(message, 2);
}