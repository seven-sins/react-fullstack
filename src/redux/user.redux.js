import axios from 'axios';
// reducer
const initState = {
    msg: '',
    username: '',
    password: '',
    type: ''
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

export function register({username, password, repeatpassword, type}){
    if(!username || !password){
        return errorMsg('用户名和密码不能为空');
    }
    if(password !== repeatpassword){
        return errorMsg('密码输入不一致');
    }
    //
    return dispatch => {
        axios.post('/auth/register', {username, password, type})
            .then(res => {
                if(res.status === 200){
                    dispatch(registerSuccess({username, password, type}));
                }else{
                    dispatch(errorMsg(res.data.message));
                }
            })
    }
    
}
