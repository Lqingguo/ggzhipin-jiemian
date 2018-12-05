import React,{Component} from 'react';
import {NavBar,InputItem ,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from '../header-selecter';
import PropTypes from 'prop-types'
import {Redirect} from  'react-router-dom'
class LaobanInfo extends Component{
  static propTypes ={
    user:PropTypes.object.isRequired,
    laoban:PropTypes.func.isRequired
  }
  state = {
    header: '',
    post: '',
    company: '',
    salary: '',
    info: '',
    type:'laoban'
  }
  handlechange=(type,val)=>{
    this.setState({
      [type]:val
    })
  }
  setHeader=header=>{
    this.setState({
      header
    })
  }
  clickchange=()=>{
    this.props.laoban(this.state)
  }
    render(){
      const {redirectTo,errMsg} = this.props.user
      if(redirectTo === '/laoban'){
      return <Redirect to={redirectTo}/>
      }
    return (
      <div>
        <NavBar>老板完善信息</NavBar>
          <HeaderSelector setHeader={this.setHeader}/>
        <p className="error">{errMsg}</p>
        <InputItem onChange={val=>{this.handlechange('post',val)}}>招聘职位</InputItem>
        <InputItem onChange={val=>{this.handlechange('company',val)}}>公司名称</InputItem>
        <InputItem onChange={val=>{this.handlechange('salary',val)}}>职位薪资</InputItem>
        <TextareaItem title="职位要求：" rows={3} onChange={val=>{this.handlechange('info',val)}}></TextareaItem>
          <Button type="primary" onClick={this.clickchange}>保存</Button>
      </div>


    )
    }
}
export default LaobanInfo ;