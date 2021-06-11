import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import BodyTextAnimation from '../components/BodyTextAnimation';

import Style from './NewsItem.module.scss';

class NewsItem extends Component {
	render() {
		return (
			<BodyTextAnimation duration={0.7} delay={this.props.delay}>
				<div className={Style.newsItem}>
					<div className={Style.author}>
						<span>Publisher </span><span>{this.props.author}</span>
					</div>
					<div className={Style.newsTitle}>
						<Link to={`/article/${this.props.slug}`}>{this.props.children}</Link>
					</div>
					<div className={Style.meta}>
						<span>
							{moment(new Date(this.props.date)).format('LL')}
						</span>
					</div>
				</div>
			</BodyTextAnimation>
		);
	}
}

export default NewsItem;

/*Add this to line 24 when Myles has implemented the reading predictions */
 /*
	&nbsp; &bull; &nbsp;
	<span> 
		{ 
			this.props.timetoread > 1 ? this.props.timetoread + ' mins read'  : this.props.timetoread + ' min read'
		}
	</span>
*/
