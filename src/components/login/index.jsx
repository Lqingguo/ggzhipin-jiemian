import React,{Component} from 'react';
import {Button,NavBar,WingBlank, WhiteSpace, List, InputItem,Radio } from 'antd-mobile';
import Logo from '../logo/index';
class Login extends Component{
  goregister=()=>{
      this.props.history.replace('/register')
  }
    render(){
    return (
      <div>
          <NavBar>硅谷直聘</NavBar>
          <Logo/>
          <WingBlank>
              <List>
                  <InputItem>用户名：</InputItem><WhiteSpace/>
                  <InputItem>密码：</InputItem><WhiteSpace/>
                  <WhiteSpace/>
                  <Button type="primary">登录</Button> <WhiteSpace/>
                  <Button onClick={this.goregister}>注册</Button>
              </List>
          </WingBlank>
      </div>
    )
    }
}
export default Login ;