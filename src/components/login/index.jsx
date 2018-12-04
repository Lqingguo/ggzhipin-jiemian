import React,{Component} from 'react';
import {Button,NavBar,WingBlank, WhiteSpace, List, InputItem,Radio } from 'antd-mobile';
import Logo from '../logo/index';
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
class Login extends Component{
  static propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}
  state = {
    username:'',
    password:''
  }
  goregister=()=>{
      this.props.history.replace('/register');
  }
  handelChange = (type,val)=>{
    this.setState({
      [type]:val
    })
  }
  login = ()=>{
    const {username,password} = this.state;
    this.props.login({username,password})
  }
    render(){
    const {errMsg,redirectTo} = this.props.user
      if(redirectTo){
        return <Redirect to={redirectTo}/>
      }
    return (
      <div>
          <NavBar>硅谷直聘</NavBar>
          <Logo/>
          <p className="error">{errMsg}</p>
          <WingBlank>
              <List>
                  <InputItem onChange={val=>this.handelChange('username',val)}>用户名：</InputItem><WhiteSpace/>
                  <InputItem onChange={val=>this.handelChange('password',val)}>密码：</InputItem><WhiteSpace/>
                  <WhiteSpace/>
                  <Button type="primary" onClick={this.login}>登录</Button> <WhiteSpace/>
                  <Button onClick={this.goregister}>注册</Button>
              </List>
          </WingBlank>
      </div>
    )
    }
}
export default Login ;