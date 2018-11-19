import React from 'react';

import './PageToolbar.scss';
import './Breadcrumbs.scss';
import './Btns.scss';
import {Breadcrumbs} from "./Breadcrumbs";

const PageToolbar = ({actions}) => (
    <div className="settings-row">
        <Breadcrumbs/>

		<div className="right-settings">
			{
				actions.map((action) => (
					<div className="settings-item">
                        {action}
					</div>
				))
			}
		</div>
		
	</div>
);

export {PageToolbar};