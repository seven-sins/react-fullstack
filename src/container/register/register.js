import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux';

import { register } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';
import './register.less';

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            username: '',
            password: '',
            repeatpassword: '',
            type: "1" // 1. 管理员, 2. 普通用户
        }
    }
    login(){
        this.props.history.push('/login');
    }
    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    handleRegister = () => {
        // console.log(this.state);
        this.props.register(this.state);
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                <div className='register-title'>注册</div>
                <List>
                    <InputItem onChange={v=>this.handleChange('username', v)}>用户</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.handleChange('password', v)}>密码</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.handleChange('repeatpassword', v)}>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type=='1'} onChange={()=>this.handleChange('type', '1')}>
                        管理员
                    </RadioItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type=='2'} onChange={()=>this.handleChange('type', '2')}>
                        普通用户
                    </RadioItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.login}>登录</Button>
                </List>
            </div>
        )
    }
}

export default Register;