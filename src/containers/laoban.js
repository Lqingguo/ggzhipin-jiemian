import {connect} from 'react-redux';

import Laoban from '../components/laoban';
import {getUserLista} from '../redux/actions';

export default connect(
  state=>({getuserlist:state.getuserlist}),
  {getUserLista}
)(Laoban)