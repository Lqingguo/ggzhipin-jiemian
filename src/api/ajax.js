
import axios from 'axios';

export default async function (url,data,method='GET'){
  //在外边定义一个空字符串用拼串
  let fs = '';
  //判断是否有参数
  if(data){
    //参数为对象，获取对象上的属性名
    const arr = Object.keys(data);
    arr.forEach(key=>{
      fs += `${key}=${data[key]}&`
    });
    //去掉请求参数上最后一个&
    fs = fs.substring(0,fs.length-1);
  }
  //将填写的method转换为大写
  const type =method.toUpperCase();
//判断请求方式
  if(type === 'GET'){
    //使用axios发送请求，返回响应数据
    return  axios.get(url+'?'+fs);
  }else if(type === 'POST'){
    //使用axios发送请求，返回响应数据
    return  axios.post(url,fs);
  }
}