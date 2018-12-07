/**
 * Created by liqingguo on 2018/12/3.
 */

import {
  registerajax,
  loginajax,
  reqUpdate,
  reqGetUserInfo,
  getUserList
} from '../api'
import {
  AUTHSUCCESS,
  AUTHERROR,
  UPDATEUSERINFO,
  RESETUSERINFO,
  UPDATEUSERLIST,
  RESETUSERLIST
} from './actions-types'
//同步
export const authSuccess= data=>({type:AUTHSUCCESS,data})
export const authError = data=> ({type:AUTHERROR,data})
//异步
export const updateUserInfo = data=>({type:UPDATEUSERINFO,data});
export const resetUserInfo =data=>({type:RESETUSERINFO,data})
export const updateUserList = data=>({type:UPDATEUSERLIST,data});
export const resetUserList =()=>({type:RESETUSERLIST})
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

//老板
export const laoban = ({header,post,company,salary,info,type})=>{

  if(!header){
    return authError({errMsg:'请选择头像'})
  }else if(type==='laoban'&&!post ){
    return authError({errMsg:'请选择职位'})
  }else if(type==='laoban'&&!company){
    return authError({errMsg:'请选择职位名称'})
  }else if(type==='laoban'&&!salary){
    return authError({errMsg:'请选择薪资'})
  }else if(!info){
    return authError({errMsg:'请选择所需要的技术'})
  }
  return dispatch=>{
    reqUpdate({header,post,company,salary,info})
      .then(({data})=>{
        if(data.code===0){
          dispatch(authSuccess(data.data))
        }else {
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(err=>{
        dispatch(authError({errMsg:'网路错误刷新重试'}))
      })
  }
}
export const getUserInfo=()=>{
  return dispatch=>{
    reqGetUserInfo()
      .then(({data})=>{
      if(data.code === 0){
        dispatch(updateUserInfo(data.data))
      }
      })
      .catch(err=>{
        dispatch(resetUserInfo({errMsg:'网络不稳定，刷新重试'}))
      })
  }
}
export const getUserLista=type=>{
 return dispatch=>{
   getUserList(type)
     .then(({data})=>{
     if(data.code===0){
       dispatch(updateUserList(data.data))
     }else {
       dispatch(resetUserList())
     }
     })
     .catch(err=>{
       dispatch(resetUserList())
     })
  }
}