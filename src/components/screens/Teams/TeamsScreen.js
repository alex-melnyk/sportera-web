import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {TeamCard, TeamCardSimple, PageToolbar} from "../../common";

class TeamsScreen extends Component {
	render() {
		return (
			<div>
				<PageToolbar/>
				
				<div className="team-card-wrap grid-view">

					<TeamCard />


					{
						Object.keys([...new Array(3)]).map((key)=> (
							<TeamCardSimple 
								key={key}
							/>
						))
					}

					<TeamCard />

				</div>
				
			</div>  

		);
	}
}

export {TeamsScreen};