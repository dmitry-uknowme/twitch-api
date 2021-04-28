import React from 'react';
import cn from 'classNames';

const TabBarNav = ({ navLabel, className, onChangeActiveTab }) => {
	const classes = cn(className, 'nav-item');

	return (
		<button
			type='button'
			className={classes}
			onClick={() => {
				onChangeActiveTab(navLabel);
			}}>
			{navLabel}
		</button>
	);
};

export default TabBarNav;
