import React,{Component} from 'react';
import { List, Result, Button, WhiteSpace, Modal } from 'antd-mobile';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
class Personal extends Component{
  static propTypes = {
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired,
    resetUserList:PropTypes.func.isRequired,
    resetUserInfo:PropTypes.func.isRequired
  }
    logout=()=>{
      alert('删除', '你确定???', [
        { text: '取消', onPress: () => {} },
        { text: '确定', onPress: () => {
            //清除redux管理数据
          Cookies.remove('userid');
            //清除user,getUserInfo中的状态
         this.props.resetUserList();
         this.props.resetUserInfo();
            //跳转到登录页面
          this.props.history.replace('/login');
        } },
      ])
    }
    render(){
    const {username,post,company,info,salary,header} = this.props.user
      return (
        <div>
            <Result
              img={<img src={require(`../../assets/images/头像${header}.png`)} alt=""/>}
              title={username}
            />
            <List renderHeader={() => '相关信息'}>
                <Item
                  multipleLine
                  onClick={() => {}}
                >
                    <Brief>职位：{company}</Brief>
                    <Brief>简介:{info}</Brief>
                </Item>
            </List>
            <WhiteSpace />
            <Button
              type="warning"
              onClick={this.logout}
            >
                退出登录
            </Button>
        </div>
      )
    }
}
export default Personal ;