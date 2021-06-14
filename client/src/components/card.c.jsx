import { Card } from 'antd';
import React from 'react';
const TweetCard = ({ id, info }) => {
	// const { id, info } = props;
	return (
		<Card title={`${id}`} bordered={false} style={{ width: 300 }}>
			<p>{info}</p>
		</Card>
	);
};

export default TweetCard;
