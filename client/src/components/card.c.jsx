import { Card } from 'antd';
import React from 'react';
import './card.s.css';

const TweetCard = ({ tweet }) => {
	const { id, category, content, handle, link, datetime } = tweet;
	return (
		<div className='tweet-cards'>
			<a href={link} target='_blank' rel='noreferrer noopener'>
				<Card title={`${id + 1}`} bordered={false}>
					<p>{category}</p>
					<p>{content}</p>
					<p>
						<a href={`https://twitter.com/${handle}`} target='_blank' rel='noreferrer noopener'>
							{handle}
						</a>
					</p>
					<p>{datetime}</p>
				</Card>
			</a>
		</div>
	);
};

export default TweetCard;
