import cn from 'classnames';
const TabBarItem = ({ children, label, activeTab, ...attrs }) => {
	const classes = cn('tab-bar-item', { active: activeTab === label });

	return (
		<div className={classes} {...attrs}>
			{children}
		</div>
	);
};
