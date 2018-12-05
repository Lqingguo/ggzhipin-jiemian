import React,{Component} from 'react';
import {NavBar,InputItem ,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from '../header-selecter';
import PropTypes from 'prop-types'
import {Redirect} from  'react-router-dom'
class DashenInfo extends Component{
  static propTypes ={
    user:PropTypes.object.isRequired,
    laoban:PropTypes.func.isRequired
  }
  state = {
    header: '',
    post: '',
    info: '',
    type:'dashen'
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
    if(redirectTo === '/dashen'){
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>大神完善信息</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <p className="error">{errMsg}</p>
        <InputItem onChange={val=>{this.handlechange('post',val)}}>求职岗位</InputItem>
        <TextareaItem title="个人简介：" rows={3} onChange={val=>{this.handlechange('info',val)}}></TextareaItem>
        <Button type="primary" onClick={this.clickchange}>保存</Button>
      </div>


    )
  }
}
export default DashenInfo ;