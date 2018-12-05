import React,{Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class Laoban extends Component{
    render(){
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            thumb={<img src={require('../../assets/images/头像1.png')} alt=""/>}
            extra={<span>dashen001</span>}
          />
          <Card.Body>
            <div>React全家桶,vue全家桶,高级js</div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    )
    }
}
export default Laoban ;