import React from 'react';
import PropTypes from 'prop-types';

import LogoImage from '../../assets/img/tpl/logo.svg';
import UserAvatar from '../../assets/img/avatar2x.png';
import ClubLogo from '../../assets/img/club/logo2x.png';

import './Header.scss';

const CLUB = 0;
const PROFILE = 1;

class Header extends React.Component {
  state = {
    dropdownOpen: null,
  };

  toggleDropdown = (type) => {
    this.setState(state => {
      if (state.dropdownOpen === type) {
        return { dropdownOpen: null };
      } else {
        return { dropdownOpen: type };
      }
    })
  };

  render() {
    const { onMenuToggle } = this.props;
    return (
      <header className="header">
        {/* !NOTE! if image not 2x - delete className="x2" from image */}
        <div className="d-flex">
          <div className="header-left">
				<span
          className="nav-toggler"
          onClick={() => onMenuToggle && onMenuToggle()}
        >
					<i className="ft-toggler"/>
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
                  <a className="dropdown-toggle" onClick={() => this.toggleDropdown(CLUB)}>
                    <div className="dropdown-item-col">
                      <h6>Мои клубы</h6>
                      <span>Стрела</span>
                    </div>
                    <div className="flex-column">
                      <div className="club-logo">
                        <i className="ft-club"/>
                      </div>
                    </div>
                    <div className="arrow-wrap">
                      <span className="arrow"><i className="ft-arrow-down"/></span>
                    </div>
                  </a>
                  <div className={this.state.dropdownOpen === CLUB ? "dropdown-menu open" : "dropdown-menu"}>
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
                          <i className="ft-plus-rounded"/>
                          <span>Добавить клуб</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="dropdown-nav">
                  <a className="dropdown-toggle" onClick={() => this.toggleDropdown(PROFILE)}>
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
                      <span className="arrow"><i className="ft-arrow-down"/></span>
                    </div>
                  </a>
                   <div className={this.state.dropdownOpen === PROFILE ? "dropdown-menu open" : "dropdown-menu"}>
                    <ul className="dropdown-list">
                      <li>
                        <a href="#" className="dropdown-item">
                          <i className="ft-user"/>
                          <span>Мой профиль</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          <i className="ft-union"/>
                          <span>Онбординг</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          <i className="ft-price-round"/>
                          <span>Оплата</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          <i className="ft-club"/>
                          <span>Мои клубы</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item drordown-item-large">
                          <i className="ft-exid"/>
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
    )
  }
}

Header.propTypes = {
  onMenuToggle: PropTypes.func
};

export { Header };
