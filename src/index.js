/**
 * Created by liqingguo on 2018/12/3.
 */
//入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'
import Main from './components/main';
import Register from './containers/register';
import Login from './containers/login';
import './assets/less/index.less'
ReactDOM.render((
  <Provider store={store}>
  <HashRouter>
  <Switch>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route  path='/' component={Main}/>
  </Switch>
  </HashRouter>
  </Provider>
),
  document.getElementById('root'))
