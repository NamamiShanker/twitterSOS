import { Card } from 'antd';
import React from 'react';
import './card.s.css';

const TweetCard = ({ tweet }) => {
	const { id, category, content, handle, link, datetime } = tweet;
	return (
		<div className='tweet-cards'>
			<a style={{ color: 'black' }} href={`${link}`} target='_blank'>
				<Card title={category} bordered={true} id='ind-card'>
					<p className='ID-right'>ID : {`${id + 1}`}</p>
					<p> {content}</p>
					<p className='tweet-font '>
						<a href={`https://twitter.com/${handle}`} target='_blank' rel='noreferrer noopener'>
							{handle}
						</a>
					</p>
					<p>{datetime}</p>
				</Card>
			</a>
			<br />
		</div>
	);
};

export default TweetCard;
