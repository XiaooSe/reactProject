import React from 'react';
import { Input, Icon,Button  } from 'antd';

class LogoIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName:'',
            password:''
        }
    }

    componentDidMount(){
        console.log(this.state);
    };

    render() {
        const { userName } = this.state;
        const { password }  = this.state;
        return (
            <div id="logoIn">
                <p>logoIn页面</p>
                <Input
                    style={{width: '200px'}}
                    placeholder="请输入用户名"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={userName}
                    onChange={this.onChangeUserName}
                    ref={node => this.userNameInput = node}
                />

                <Input
                    style={{width: '200px'}}
                    placeholder="请输入密码"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={password}
                    onChange={this.onChangePassword}
                    ref={node => this.userPasswordInput = node}
                />
                <div><Button type="primary" onClick={() =>this.logIn()}>登录</Button></div>
            </div>
        )
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    logIn(){
        sessionStorage.setItem('admin',this.state.userName)
        this.props.history.push({pathname: '/main'})
    }
}

export default LogoIn;