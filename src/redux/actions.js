/**
 * Created by liqingguo on 2018/12/3.
 */

import {registerajax,loginajax} from '../api'
import {AUTHSUCCESS,AUTHERROR} from './actions-types'
//同步
export const authSuccess= data=>({type:AUTHSUCCESS,data})
export const authError = data=> ({type:AUTHERROR,data})
//异步
//注册
export const register =({username,password,passwords,type})=>{
  //表单验证
  if(!username){
    return authError({errMsg:'请输入用户名'})
  }else if(!password){
    return authError({errMsg:'请输入密码'})
  }else if(password !== passwords){
    return authError({errMsg:'两次输入密码不一致，请重新输入'})
  }
  return dispatch=>{
    registerajax({username,password,type})
      .then(({data})=>{
      //请求成功
        if(data.code === 0){
          //【注册成功
          //更新状态
            dispatch(authSuccess(data.data));
        }else {
          //注册失败
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(err=>{
        dispatch(authError({errMsg:'网络不稳定，请刷新页面'}))
      })
  }
}
//登录
export const login =({username,password})=>{
  //表单验证
  if(!username){
    return authError({errMsg:'请输入用户名'})
  }else if(!password){
    return authError({errMsg:'请输入密码'})
  }
  return dispatch=> {
    loginajax({username, password})
      .then(({data})=>{
        if(data.code === 0){
          //登录成功
          dispatch(authSuccess(data.data))
        }else {
          //登录失败
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(err=>{
        dispatch(authError({errMsg:'网路错误刷新重试'}))
      })
  }
}