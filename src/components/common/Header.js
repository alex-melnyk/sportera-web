import React, {Component} from 'react';

import LogoImage from '../../assets/img/tpl/logo.svg';

import './Header.scss';

const Header = () => (
    <header
        className="header"
    >
        <div className="d-flex">
            <div className="header-left">
                <a href="#" className="nav-toggler">
                    <span className="icon"> icon</span>
                </a>
                <a href="#" className="logo">
                    <img
                        src={LogoImage}
                        alt=""
                        width="50"
                    />
                </a>
            </div>

            <div className="header-right">
                <ul className="header-nav">
                    <li>
                        <div className="dropdown-nav">
                            <a className="dropdown-toggle" href="#">
	    						<span className="arrow">
									<i className="icon-calendar" style={{fontSize: '20pt'}}></i>
								</span>

                                {/*<i className="icon-chat"></i>*/}
                                {/*<i className="icon-club"></i>*/}
                                {/*<i className="icon-command"></i>*/}
                                {/*<i className="icon-crm"></i>*/}
                                {/*<i className="icon-dashboard"></i>*/}
                                {/*<i className="icon-docs"></i>*/}
                                {/*<i className="icon-payment"></i>*/}
                                {/*<i className="icon-settings"></i>*/}
                                {/*<i className="icon-toggler"></i>*/}
                                {/*<i className="icon-tourney"></i>*/}
                                {/*<i className="icon-user"></i>*/}
                            </a>
                            <div className="dropdown-menu">

                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>


    </header>
);

export {Header};