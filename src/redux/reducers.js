/**
 * Created by liqingguo on 2018/12/3.
 */

import {combineReducers} from 'redux';
import {AUTHSUCCESS,AUTHERROR} from './actions-types';
const initUserState ={
  username:'',
  type:'',
  _id:'',
  errMsg:'',
  redirectTo:'',
  header: '',
  post: '',
  company: '',
  salary: '',
  info: ''
};
function user(previousState = initUserState,action){
  switch (action.type){
    case AUTHSUCCESS :
      // console.log({...action.data,redirectTo:geredirectTo(action.data.type,action.data.header)})
      return {...action.data,redirectTo:geredirectTo(action.data.type,action.data.header)};
    case AUTHERROR :
      return {...initUserState,...action.data};
    default:
      return previousState;
  }
}
function geredirectTo(type,header){
  let path = '';
  if(type === 'laoban'){
    path='/laoban'
  }else {
    path='/dashen'
  }
  if(!header){
    path+='info'
  }
  return path
}
//默认暴露合并后的reducers函数
export default combineReducers({
  user
})