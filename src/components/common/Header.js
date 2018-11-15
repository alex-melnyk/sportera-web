import React, {Component} from 'react';

import LogoImage from '../../assets/img/tpl/logo.svg';
import UserAvatar from '../../assets/img/avatar2x.png';

import './Header.scss';

const Header = () => (
	<header
		className="header"
	>
		{/* !NOTE! if image not 2x - delete className="x2" from image */}
		<div className="d-flex">
			<div className="header-left">
				<a href="#" className="nav-toggler">
					<i className="ft-toggler"></i>
				</a>
				<a href="#" className="logo">
					<img
						src={LogoImage}
						alt=""
						title=""
					/>
				</a>
			</div>

			<div className="header-right">
				<ul className="header-nav">
					{/*<li>
						<div className="dropdown-nav">
							<a className="dropdown-toggle" href="#">
								<span className="arrow">
									<i className="ft-calendar"></i>
								</span>*/}

								{/*<i className="ft-chat"></i>*/}
								{/*<i className="ft-club"></i>*/}
								{/*<i className="ft-command"></i>*/}
								{/*<i className="ft-crm"></i>*/}
								{/*<i className="ft-dashboard"></i>*/}
								{/*<i className="ft-docs"></i>*/}
								{/*<i className="ft-payment"></i>*/}
								{/*<i className="ft-settings"></i>*/}
								{/*<i className="ft-toggler"></i>*/}
								{/*<i className="ft-tourney"></i>*/}
								{/*<i className="ft-user"></i>*/}
							{/*</a>
							<div className="dropdown-menu">

							</div>
						</div>

					</li>*/}

					<li>
						<div className="dropdown-nav">
							<a className="dropdown-toggle" href="#">
								<div className="dropdown-item-col">
									<h6>Мои клубы</h6>
									<span>Стрела</span>
								</div>
								<div className="flex-column">
									<div className="club-logo">
										<i className="ft-club"></i>
									</div>
								</div>
								<div className="arrow-wrap">
									<span className="arrow"><i className="ft-arrow-down"></i></span>
								</div>
							</a>
							<div className="dropdown-menu">
								{/* will add later according pages */}
							</div>
						</div>

					</li>

					<li>
						<div className="dropdown-nav">
							<a className="dropdown-toggle" href="#">
								<div className="dropdown-item-col">
									<h6>Давид Наваро</h6>
									<span>Админ</span>
								</div>
								<div className="flex-column">
									<span className="avatar-photo">
										<img
											className="x2"
											src={UserAvatar}
											alt=""
											title=""
										/>
									</span>
								</div>
								<div className="arrow-wrap">
									<span className="arrow"><i className="ft-arrow-down"></i></span>
								</div>
							</a>
							<div className="dropdown-menu">
								{/* will add later according pages */}
							</div>
						</div>

					</li>
					
				</ul>
			</div>
		</div>


	</header>
);

export {Header};