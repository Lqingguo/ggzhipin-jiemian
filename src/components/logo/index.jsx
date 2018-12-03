
import React,{Component} from 'react';
import logo from './logo.png';
import './logo.less'
class Logo extends Component{
    render(){
    return (
        <div className="logoname">
            <img src={logo} alt="logo"/>
        </div>
    )
    }
}
export default Logo ;