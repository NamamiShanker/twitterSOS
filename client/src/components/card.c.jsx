import { Card } from 'antd';
import React from 'react';
import './card.s.css';

const TweetCard = ({ tweet }) => {
	const { id, category, content, handle, link, datetime } = tweet;
	return (
		<div className='tweet-card'>
			<Card title={category} bordered={true} >
					<p className="ID-right">ID : {`${id + 1}`}</p>
					<p> <a style={{color: 'black'}} href= {`${link}`} target="_blank">{content}</a></p>
					<p className="tweet-font ">
						<a  href={`https://twitter.com/${handle}`} target='_blank' rel='noreferrer noopener'>
							{handle}
						</a>
					</p>
					<p>{datetime}</p>
				</Card>
				<br/>
		</div>
	);
};

export default TweetCard;
