import React,{Component} from 'react';
import {NavBar,InputItem ,TextareaItem,Button} from 'antd-mobile';
import HeaderSelecter from '../header-selecter';
class LaobanInfo extends Component{
    render(){
    return (
      <div>
        <NavBar>老板完善信息</NavBar>
          <HeaderSelecter/>
        <InputItem>招聘职位</InputItem>
        <InputItem>职位名称</InputItem>
        <InputItem>职位薪资</InputItem>
        <TextareaItem title="职位要求：" rows="3"></TextareaItem>
          <Button type="primary">保存</Button>
      </div>


    )
    }
}
export default LaobanInfo ;