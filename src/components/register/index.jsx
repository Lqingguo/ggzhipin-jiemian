import React,{Component} from 'react';
import {Button,NavBar,WingBlank, WhiteSpace, List, InputItem,Radio } from 'antd-mobile';
import Logo from '../logo/index';
 const Item = List.Item
class Register extends Component{
     state= {
       laoban:true,
       username:'',
       password:'',
       passwords:''
     }
     stateChange=(type,value)=>{
         this.setState({
           [type]:value
         })
     }
    gologin=()=>{
         console.log(111)
      this.props.history.replace('/login');
    }
    goajax=()=>{
      const {username,password,passwords} = this.state;
      console.log(username)
    }

    render(){
         const {laoban} =this.state
    return (
      <div>
      <NavBar>硅谷直聘</NavBar>
      <Logo/>
      <WingBlank>
          <List>
              <InputItem onChange={val=>this.stateChange('username',val)}>用户名：</InputItem><WhiteSpace/>
              <InputItem onChange={val=>this.stateChange('username',val)}>密码：</InputItem><WhiteSpace/>
              <InputItem onChange={val=>this.stateChange('username',val)}>确认密码：</InputItem><WhiteSpace/>
              <Item>
                  用户类型:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Radio checked={!laoban} onChange={this.stateChange.bind(null,'laoban',false)}>大神</Radio> &nbsp;&nbsp;&nbsp;
                  <Radio checked={laoban} onChange={this.stateChange.bind(null,'laoban',true)}>老板</Radio>
              </Item>
              <WhiteSpace/>
              <Button type="primary" onClick={this.goajax}>注册</Button> <WhiteSpace/>
              <Button onClick={this.gologin}>已有账号</Button>
          </List>
      </WingBlank>
      </div>
    )
    }
}
export default Register ;