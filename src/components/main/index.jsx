import React,{Component} from 'react';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import {Redirect,Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {NavBar,Icon} from  'antd-mobile'
import Cookies from 'js-cookie';
import Personal from '../../containers/personal';
import Message from '../message';
import Laoban from '../../containers/laoban';
import Footer from  '../footer';
import './index.less'
class Main extends Component{
  static propTypes = {
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired
  }
    navList =[
      {path:'/dashen',title:'老板列表',icon:'dashen',text:'老板'},
      {path:'/laoban',title:'大神列表',icon:'laoban',text:'大神'},
      {path:'/message',title:'消息列表',icon:'message',text:'消息'},
      {path:'/personal',title:'个人列表',icon:'personal',text:'个人'},
      ]
    render(){
      /*
       1. 判断本地有没有cookie，如果没有，直接去登录页面
       2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
       3. 如果本地有cookie，redux中有状态，直接显示
       */
      // 1. 判断本地有没有cookie，如果没有，直接去登录页面
      const userid = Cookies.get('userid');
      if (!userid) {
        return <Redirect to='/login'/>
      }
      // 2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
      if(!this.props.user._id){
        this.props.getUserInfo();
        return <Icon className="loading" type="loading" size="lg"/>
      }
      //获取当前的路由路径部分

      const {pathname} = this.props.location;
      if (pathname === '/') {
        return <Redirect to={this.props.user.redirectTo}/>
      }
      const current = this.navList.find(item=>item.path === pathname);
    return (
        <div>
          {
            current ? <NavBar className="header">{current.title}</NavBar> : null
          }
          <div className="main">
            <Route path="/laobaninfo" component={LaobanInfo}/>
            <Route path="/dasheninfo" component={DashenInfo}/>
            <Route path="/laoban" component={Laoban}/>
            <Route path="/message" component={Message}/>
            <Route path="/personal" component={Personal}/>
          </div>
          {current ?  <Footer navList={this.navList}/>: null}
        </div>
    )
    }
}
export default Main ;