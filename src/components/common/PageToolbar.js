import React from 'react';
import PropTypes from 'prop-types';

import './PageToolbar.scss';
import './Breadcrumbs.scss';
import './Btns.scss';

const PageToolbar = () => (
	<div
		className="settings-row"
	>
		<ul className="breadcrumbs">
			<li className="bredcrumb-item">
				Команды <span> 5</span>
			</li>
		</ul>

		<div className="right-settings">
			<div className="settings-item success-group-sm">
				<a href="#" className="btn-sm btn-success active">
					<i className="ft-block"></i>
				</a>
				<a href="#" className="btn-sm btn-success">
					<i className="ft-list-view"></i>
				</a>
			</div>
			<div className="settings-item">
				<a href="#" className="btn btn-success">
					<i className="ft-plus"></i>
					<span>Создать команду</span>
				</a>
			</div>
		</div>
		
	</div>
);

export {PageToolbar};