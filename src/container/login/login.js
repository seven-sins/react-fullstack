import React from 'react';
import Logo from '../../component/logo/logo';
import '../../less/common.less'
import './login.less'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }
    register(){
        this.props.history.push('/register');
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <h2 className='login-title'>登录页</h2>
                <ul className='login-button'>
                    <li>登录</li>
                    <li onClick={this.register}>注册</li>
                </ul>
            </div>
        )
    }
}

export default Login;