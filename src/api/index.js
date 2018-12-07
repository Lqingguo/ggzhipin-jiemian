import ajax from './ajax';
// const prefix = 'http://localhost:4000'
const prefix =''
export const registerajax =data=>ajax(`${prefix}/register`,data,'POST');
export const loginajax =data=>ajax(`${prefix}/login`,data,'POST');
export const reqUpdate =data=>ajax(`${prefix}/update`,data,'POST');
export const reqGetUserInfo =()=>ajax(`${prefix}/user`);
export const getUserList = type=>ajax(`${prefix}/userlist`, {type});