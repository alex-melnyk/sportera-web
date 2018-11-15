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
                    <i className="ft-toggler"></i>
                </a>
                <a href="#" className="logo">
                    <img
                        src={LogoImage}
                        alt=""
                    />
                </a>
            </div>

            <div className="header-right">
                <ul className="header-nav">
                    <li>
                        <div className="dropdown-nav">
                            <a className="dropdown-toggle" href="#">
	    						<span className="arrow">
									<i className="ft-calendar" style={{fontSize: '20pt'}}></i>
								</span>

                                <i className="ft-chat"></i>
                                <i className="ft-club"></i>
                                <i className="ft-command"></i>
                                <i className="ft-crm"></i>
                                <i className="ft-dashboard"></i>
                                <i className="ft-docs"></i>
                                <i className="ft-payment"></i>
                                <i className="ft-settings"></i>
                                <i className="ft-toggler"></i>
                                <i className="ft-tourney"></i>
                                <i className="ft-user"></i>
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