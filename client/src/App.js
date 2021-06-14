import { Layout } from 'antd';
import React from 'react';
import './App.css';
import SiderDemo from './components/Sider1';
import TweetCard from './components/card.c';
import axios from 'axios';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			data: null,
		};
	}

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};
	componentDidMount() {
		axios.get('https://api.spacexdata.com/v4/capsules').then((spacexdata) => {
			this.setState({
				data: spacexdata.data,
			});
			console.log(spacexdata);
		});
	}

	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<SiderDemo />
				<Layout className='site-layout'>
					<Header className='site-layout-background' style={{ padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
						<div
							className='site-layout-background'
							style={{ padding: 24, minHeight: 360 }}>
							{this.state.data
								? this.state.data.map((spacedata) => (
									<TweetCard id={spacedata.id} info={spacedata.last_update} />
								))
								: ''}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default App;
