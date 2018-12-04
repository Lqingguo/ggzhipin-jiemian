/**
 * Created by liqingguo on 2018/12/4.
 */
import {connect} from 'react-redux';
//引入ui组件
import Register from '../components/register';
import {register} from '../redux/actions'
//暴露容器组件
export default connect(
  state=>({user : state.user}),
  {register}
)(Register)