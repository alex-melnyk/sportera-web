import React from 'react';
import PropTypes from 'prop-types';

import LogoImage from '../../assets/img/tpl/logo.svg';
import UserAvatar from '../../assets/img/avatar2x.png';
import ClubLogo from '../../assets/img/club/logo2x.png';

import './Header.scss';

const Header = ({onMenuToggle}) => (
	<header className="header">
		{/* !NOTE! if image not 2x - delete className="x2" from image */}
		<div className="d-flex">
			<div className="header-left">
				<span
                    className="nav-toggler"
                    onClick={() => onMenuToggle && onMenuToggle()}
                >
					<i className="ft-toggler"></i>
				</span>
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
							{/*<div className="dropdown-menu open">*/}
							<div className="dropdown-menu">
								<ul className="dropdown-list">
									<li>
										<a href="#" className="dropdown-item">
											<span className="club-logo">
												<img
													className="x2"
													src={ClubLogo}
													alt=""
													title=""
												/>
											</span>
											<span>Стрела</span>
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item">
											<span className="club-logo">
												<img
													className="x2"
													src={ClubLogo}
													alt=""
													title=""
												/>
											</span>
											<span>Динамо</span>
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item">
											<span className="club-logo">
												<img
													className="x2"
													src={ClubLogo}
													alt=""
													title=""
												/>
											</span>
											<span>Феникс</span>
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item drordown-item-large text-success">
											<i className="ft-plus-rounded"></i>
											<span>Добавить клуб</span>
										</a>
									</li>
								</ul>
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
							{/* <div className="dropdown-menu open">*/}
							<div className="dropdown-menu">
								<ul className="dropdown-list">
									<li>
										<a href="#" className="dropdown-item">
											<i className="ft-user"></i>
											<span>Мой профиль</span>
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item">
											<i className="ft-union"></i>
											<span>Онбординг</span>
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item">
											<i className="ft-price-round"></i>
											<span>Оплата</span>
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item">
											<i className="ft-club"></i>
											<span>Мои клубы</span>
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item drordown-item-large">
											<i className="ft-exid"></i>
											<span>Выйти из аккаунта</span>
										</a>
									</li>
								</ul>
							</div>
						</div>

					</li>

				</ul>
			</div>
		</div>


	</header>
);

Header.propTypes = {
	onMenuToggle: PropTypes.func
};

export {Header};