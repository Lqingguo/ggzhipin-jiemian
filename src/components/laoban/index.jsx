import React,{Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';
class Laoban extends Component{
  static propTypes ={
    getuserlist:PropTypes.array.isRequired,
    getUserLista:PropTypes.func.isRequired
  }
  componentDidMount(){

    if (!this.props.getuserlist.length) {
      this.props.getUserLista('dashen');
      console.log(this.props.getuserlist)

    }
  }
    render(){
      const userList = this.props.getuserlist.filter(item => item.header);
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />

        {
          userList.map((item,index)=>{
        return   <div key={index}>
              <Card>
                <Card.Header
                  thumb={<img src={require(`../../assets/images/头像${+item.header+1}.png`)} alt=""/>}
                  extra={<span>{item.username}</span>}
                />
                <Card.Body>
                  <div>职位：{item.post}</div>
                  <div>描述：{item.info}</div>
                </Card.Body>
              </Card>
              <WhiteSpace size="lg" />
            </div>
          })
        }


      </WingBlank>
    )
    }
}
export default Laoban ;