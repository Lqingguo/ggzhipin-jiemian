import React,{Component} from 'react';
import {NavBar,InputItem,Button } from 'antd-mobile';
import HeaderSelecter from '../header-selecter';
class DashenInfo extends Component{
  render(){
    return (
      <div>
        <NavBar>大神完善信息</NavBar>
        <HeaderSelecter/>
        <InputItem>应聘职位</InputItem>
        <InputItem>期望薪资</InputItem>
        <Button type="primary">保存</Button>
      </div>


    )
  }
}
export default DashenInfo ;