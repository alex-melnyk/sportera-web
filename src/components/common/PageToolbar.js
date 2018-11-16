import React from 'react';

import './PageToolbar.scss';
import './Breadcrumbs.scss';
import './Btns.scss';

const PageToolbar = ({actions}) => (
	<div
		className="settings-row"
	>
		<ul className="breadcrumbs">
			<li className="bredcrumb-item">
				Команды <span> 5</span>
			</li>
		</ul>

		<div className="right-settings">
			{actions}
		</div>
		
	</div>
);

export {PageToolbar};