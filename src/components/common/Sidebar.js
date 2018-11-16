import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'simplebar';
import 'simplebar/dist/simplebar.css';

import './Sidebar.scss';

const Sidebar = () => (
	<aside className="left-nav">
		<div data-simplebar>
			<ul className="page-main-nav">
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-dashboard"></i>
						</span>
						<span className="nav-item-title">Дэшборд</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item active">
						<span className="nav-item-icon small-icon">
							<i className="ft-command"></i>
						</span>
						<span className="nav-item-title">Команды</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-user"></i>
						</span>
						<span className="nav-item-title">Игроки</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-docs"></i>
						</span>
						<span className="nav-item-title">Документы</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-calendar"></i>
						</span>
						<span className="nav-item-title">Календарь</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-club"></i>
						</span>
						<span className="nav-item-title">Клуб</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-payment"></i>
						</span>
						<span className="nav-item-title">Платежи</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-tourney"></i>
						</span>
						<span className="nav-item-title">Турниры</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-chat"></i>
						</span>
						<span className="nav-item-title">Чат</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-crm"></i>
						</span>
						<span className="nav-item-title">CRM</span>
					</a>
				</li>
				<li>
					<a href="#" className="nav-item">
						<span className="nav-item-icon">
							<i className="ft-settings"></i>
						</span>
						<span className="nav-item-title">Настройки</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>
);

Sidebar.propTypes = {
};

export {Sidebar};