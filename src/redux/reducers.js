/**
 * Created by liqingguo on 2018/12/3.
 */

import {combineReducers} from 'redux';
const initXxxState = 0
function initXxx(previousState=initXxxState,action){
    switch (action.type){
      default:
      return  previousState
    }
}
const initYyyState=0
function initYyy (previousState=initYyyState,action){
  switch (action.type){
    default:
      return previousState;
  }
}
//暴露合并后的reducers函数
export default combineReducers({
  initXxx,
  initYyy
})