import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { connect } from 'react-redux';

import { login } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';
import './login.less';

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }
    register(){
        this.props.history.push('/register');
    }
    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    handleLogin = () => {
        this.props.login(this.state, () => {
            this.props.history.push('/register');
        })
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <div className='error-info'>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                </div>
                <div className='login-title'>登录</div>
                <List>
                    <InputItem onChange={v=>this.handleChange('username', v)}>用户</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.handleChange('password', v)}>密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.handleLogin}>登录</Button>
                <WhiteSpace />
                <Button onClick={this.register} type='primary'>注册</Button>
            </div>
        )
    }
}

export default Login;