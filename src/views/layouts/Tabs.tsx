import React, { useState } from 'react';
import { map, toString } from 'lodash';
import cn from 'classnames';

interface IProps {
	tabs: {
		[key: string]: () => JSX.Element;
	};
}

const Tabs: React.FC<IProps> = ({ tabs }) => {
	const [activeIndex, setIndex] = useState(Object.keys(tabs)[0]);

	const _handleClick = (idx: string) => {
		return setIndex(idx);
	};

	const renderTab = key => tabs[key]();
	return (
		<div className="row">
			<div className="col s12">
				<ul className="tabs tabs-fixed-width tab-demo z-depth-1">
					{map(tabs, (item, key) => (
						<li key={key} className={`tab col s${Object.values(tabs).length}`}>
							<div className={cn({ active: key === activeIndex })} onClick={() => _handleClick(toString(key))}>
								{key.toUpperCase()}
							</div>
						</li>
					))}
				</ul>
			</div>
			{activeIndex && renderTab(activeIndex)}
		</div>
	);
};

export default Tabs;
