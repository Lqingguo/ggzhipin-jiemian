/**
 * Created by liqingguo on 2018/12/4.
 */

import React,{Component} from 'react';
import { Grid,List } from 'antd-mobile';
class HeaderSelecter extends Component{
  state ={
    header:null
  }
  setHeader =(el,index)=>{
    this.setState({
      header:el.icon
    })
}
    render(){
    const {header} = this.state
      const data = Array.from(new Array(20)).map((_val, i) => ({
        icon: require(`./images/头像${i + 1}.png`),
        text: `头像${i+1}`,
      }))
    return (
      <List renderHeader={() => {
        return <div>请选择头像 <img src={header} /></div>
      }}>
        <Grid data={data} columnNum={5} activeStyle={false} onClick={this.setHeader} />

      </List>
    )
    }
}
export default HeaderSelecter ;