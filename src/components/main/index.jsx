import React,{Component} from 'react';
import LaobanInfo from '../laoban-info';
import DashenInfo from '../dashen-info'
import {Route} from 'react-router-dom'
class Main extends Component{
    render(){
    return (
        <div>
            <Route path="/laobaninfo" component={LaobanInfo}/>
            <Route path="/dasheninfo" component={DashenInfo}/>
        </div>
    )
    }
}
export default Main ;