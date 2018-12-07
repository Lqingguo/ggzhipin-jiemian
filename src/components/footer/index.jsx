import React,{Component} from 'react';
import {TabBar} from 'antd-mobile';
import {withRouter} from  'react-router-dom'
import PropTypes from 'prop-types';
import './index.less';
const Item =TabBar.Item;

class Footer extends Component{
    static propTypes ={
      navList:PropTypes.array.isRequired
    }
  redirectTo = path => {
    this.props.history.push(path);
  }
    render(){
      const type ='laoban';
      const filter =type ==='laoban' ? '/dashen':'/laoban'
      const navList = this.props.navList.filter(item=>filter ===item.path ?false:true );
    return (
      <TabBar>
        {
          navList.map((item,index)=><Item className="footer"
            key={index} title={item.text}
            icon={<img className="tupian" src={require(`./images/${item.icon}.png`)} alt={item.text}/>}
            onPress={this.redirectTo.bind(null, item.path)}
            selected={this.props.location.pathname === item.path}
            selectedIcon={<img className="tupian" src={require(`./images/${item.icon}-selected.png`)} alt={item.text}/>}
          />)
        }
      </TabBar>
    )
    }
}
export default withRouter(Footer) ;