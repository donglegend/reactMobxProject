import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import routes from './router';
import store from './store';
import { storeContext, useInit } from './hook';
import MHeader from './component/Header';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
	
	useInit();

	return (
		<div className="max-width">
			<HashRouter>
				<storeContext.Provider value={store}>
					<Layout>
						<Header>
							<MHeader />
						</Header>
						<Content>{renderRoutes(routes)}</Content>
						<Footer>Footer</Footer>
					</Layout>
				</storeContext.Provider>
			</HashRouter>
		</div>
	);
}

export default App;
