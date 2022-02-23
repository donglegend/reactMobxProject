import React, { useContext } from 'react';
import { List, Card, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import reportCenterStore from '../store';
import { storeContext } from '../../../hook';


const ReportType = [ '透视表', '柱状图', '折线图', '面积图', '饼图', '环形图' ];

const ListItem = observer((props: any) => {
	const { item } = props;

	const { themeStore } = useContext(storeContext);
    const history = useHistory()

    const onEdit = (id: number) => {
        return () => {
            history.push({pathname: `/report/edit/${id}`})
        }
    }
    const onDelete = (id: number) => {
        return () => {
            reportCenterStore.delete(id)
        }
    }

	return (
		<List.Item>
			<Card
				style={{
					background: themeStore.theme.config.background
				}}
				title={ReportType[item.type]}
			>
				<h4>{item.name}</h4>
				<p>{item.info}</p>
                <div className='align-right'>
                    <Button size='small' onClick={onEdit(item.id)}>edit</Button>
                    &nbsp;
                    <Button size='small' danger onClick={onDelete(item.id)}>delete</Button>
                </div>
			</Card>
		</List.Item>
	);
});

export default ListItem;
