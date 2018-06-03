import React from 'react';
import Logo from '../../component/logo/logo';
import '../../less/common.less';
import './register.less';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(){
        this.props.history.push('/login');
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <h2 className='register-title'>注册</h2>
                <ul className='register-container'>
                    <li>用户名:</li>
                    <li><input type='text' /></li>
                    <li>密码:</li>
                    <li><input type='text' /></li>
                </ul>
            </div>
        )
    }
}

export default Register;