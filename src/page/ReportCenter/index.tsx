import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { List, Button } from 'antd';
import reportCenterStore from './store';
import { storeContext } from '../../hook';
import ListItem from './component/ListItem';


const ReportCenter = observer((props: any) => {
	const { themeStore } = useContext(storeContext);

	useEffect(() => {
		reportCenterStore.load();
	}, []);

	return (
		<div>
			<div className="report-center">
				<b>报表数: {reportCenterStore.counts}</b>
				<Button type="primary" onClick={themeStore.update}>
					{themeStore.theme.name} update
				</Button>
				<Button onClick={reportCenterStore.add}>+</Button>
				<List
					grid={{ gutter: 16, column: 4 }}
					dataSource={reportCenterStore.list}
					renderItem={(item) => <ListItem item={item} />}
				/>
			</div>
		</div>
	);
});

export default ReportCenter;
