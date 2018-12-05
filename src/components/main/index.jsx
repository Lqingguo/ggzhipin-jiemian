import React,{Component} from 'react';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import {Redirect,Route} from 'react-router-dom';
import {NavBar} from  'antd-mobile'
import Cookies from 'js-cookie';
import Personal from '../personal';
import Message from '../message';
import Laoban from '../laoban';
import Footer from  '../footer';
class Main extends Component{
    navList =[
      {path:'/dashen',title:'老板列表',icon:'dashen',text:'老板'},
      {path:'/laoban',title:'大神列表',icon:'laoban',text:'大神'},
      {path:'/message',title:'消息列表',icon:'message',text:'消息'},
      {path:'/personal',title:'个人列表',icon:'personal',text:'个人'},
      ]
    render(){
      const userid = Cookies.get('userid');
      console.log(userid)
      if (!userid) {
        return <Redirect to='/login'/>
      }
      console.log(this.props.location.pathname);
      const {pathname} =this.props.location;

      const current = this.navList.find(item=>item.path === pathname);
    return (
        <div>
          {
            current ? <NavBar>{current.title}</NavBar> : null
          }
          <Route path="/laobaninfo" component={LaobanInfo}/>
          <Route path="/dasheninfo" component={DashenInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
          <Footer navList={this.navList}/>
        </div>
    )
    }
}
export default Main ;