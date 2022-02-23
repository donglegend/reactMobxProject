import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import storeContext from '../../hook/storeContext';
import './style/index.css'

const Header = observer(() => {
	const { userStore } = useContext(storeContext);
	return (
		<div>
			<Link to="/">报表中心</Link>
            &nbsp;&nbsp;
			<Link to="/data-source">数据源管理</Link>
			<div className='user-info'>
				{userStore.user.name} | 年龄: {userStore.age}
			</div>
		</div>
	);
});

export default Header;
