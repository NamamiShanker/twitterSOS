import { Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import './App.css';
import SiderDemo from './components/Sider1';
import TweetCard from './components/card.c';
import axios from 'axios';

const { Header, Content, Footer } = Layout;

const App = () => {
	const [data, setdata] = useState(null);
	useEffect(() => {
		axios.get('http://localhost:5000/tweets').then((tweets) => {
			setdata(tweets.data);
			console.log(tweets.data);
		});
	}, []);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<SiderDemo />
			<Layout className='site-layout'>
				<Header style={{ padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					<div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
						{data ? data.map((tweet) => <TweetCard tweet={tweet} />) : ' '}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
