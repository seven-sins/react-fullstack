import axios from 'axios';
import localStore from 'store';
import { Toast } from 'antd-mobile';
// reducer
const initState = {
    msg: '',
    username: '',
    password: '',
    userType: ''
}

export function user(state=initState, action){
    switch(action.type){
        case 'success':
            return {...state, msg: '', ...action.payload};
        case 'error':
            return {...state, msg: action.msg };
        default:
            return state;
    }
}

function errorMsg(msg){
    return { msg, type: 'error' }
}

function registerSuccess(data){
    return { type: 'success', payload: data };
}

/**
 * @param {*注册事件} param
 */
export function register({username, password, repeatpassword, userType}){
    if(!username || !password){
        return errorMsg('用户名和密码不能为空');
    }
    if(password !== repeatpassword){
        return errorMsg('密码输入不一致');
    }
    //
    return dispatch => {
        axios.post('/api/user/create', {username, password, userType})
            .then(res => {
                Toast.success(res.data.message, 2);
                //dispatch(registerSuccess({username, password, userType}));
                //if(res.status === 200){
                //    dispatch(registerSuccess({username, password, type}));
                //}else{
                //    dispatch(errorMsg(res.data.message));
                //}
            })
    }
}

/**
 * @param {*登录事件处理} param
 * @param {*} callback 
 */
export function login({username, password}, callback){
    if(!username || !password){
        return errorMsg('用户名和密码不能为空');
    }
    //
    return dispatch => {
        axios.post('/auth/login', {username, password})
            .then(res => {
                localStore.remove('token');
                localStore.set('token', res.data.data);
                callback.call();
            })
    }
}