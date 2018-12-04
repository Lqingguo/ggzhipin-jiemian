import ajax from './ajax';
// const prefix = 'http://localhost:4000'
const prefix =''
export const registerajax =data=>ajax(`${prefix}/register`,data,'POST');
export const loginajax =data=>ajax(`${prefix}/login`,data,'POST');