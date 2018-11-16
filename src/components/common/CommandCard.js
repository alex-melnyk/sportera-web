import React, {Component} from 'react';

import command1 from '../../assets/img/command/1.jpg';
import command2 from '../../assets/img/command/2.jpg';

import './CommandCard.scss';

const CommandCard = () => (
	<div
		className="command-card-wrap grid-view"
	>
		{/* !NOTE! if image not 2x - delete className="x2" from image */}
		<div className="command-card">
			<div className="card-logo">
				<img
					src={command1}
					alt=""
					title=""
				/>
				<div className="main-info">
					<h4>Феникс 2008</h4>
					<div className="players">
						<i className="ft-command"></i>
						<span>22</span>
					</div>
				</div>
			</div>
			<div className="card-data">
				<ul className="command-card-list">
					<li>
						<div className="command-card-item">
							<div class="flex-column">
								<span className="bigger">Тренер:</span>
							</div>	
							<div class="flex-column">
								<p className="bigger">Игорь Смолецкий</p>
							</div>	
						</div>
					</li>
					<li>
						<a href="#" className="command-card-item">
							
						</a>
					</li>
				</ul>
			</div>
		</div>


	</div>
);

export {CommandCard};