import React,{Component} from 'react';
import { List, Result, Button, WhiteSpace, Modal } from 'antd-mobile';
import Cookies from 'js-cookie';
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
class Personal extends Component{
    logout=()=>{
      alert('删除', '你确定???', [
        { text: '取消', onPress: () => {} },
        { text: '确定', onPress: () => {
            //清除redux管理数据
            Cookies.remove('userid');
            //跳转到登录页面
          this.props.history.replace('/login');
        } },
      ])
    }

    render(){
      return (
        <div>
            <Result
              img={<img src={require('../../assets/images/头像1.png')} alt=""/>}
              title="laoban001"
            />
            <List renderHeader={() => '相关信息'}>
                <Item
                  multipleLine
                  onClick={() => {}}
                >
                    <Brief>职位：xxx</Brief>
                    <Brief>简介：xxx</Brief>
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