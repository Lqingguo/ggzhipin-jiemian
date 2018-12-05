/**
 * Created by liqingguo on 2018/12/5.
 */
import {connect} from 'react-redux';

import LaobanInfo from '../components/laoban-info';
import {laoban} from '../redux/actions';

export default connect(
  state=>({user:state.user}),
  {laoban}
)(LaobanInfo);