
/**
 * Created by liqingguo on 2018/12/6.
 */
import {connect} from 'react-redux';
import Personal from '../components/personal';
import {getUserInfo,resetUserList,resetUserInfo} from '../redux/actions';
export default connect(
  state=>({user:state.user}),
  {getUserInfo,resetUserList,resetUserInfo}
)(Personal);