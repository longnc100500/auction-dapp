import './index.scss';

import React, { useState, useEffect } from 'react';

import { Select } from 'antd';

/*Hooks*/
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/*Navigation*/
import navigation from '@src/navigation';

/*Redux*/
import * as actionsCommon from '@store/common/actions';
import { getCodeLanguage } from '@store/common/selectors';

const { Option } = Select;

const Navbar = ({ router = {} }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  /*Selectors*/
  const lang = useSelector((state) => getCodeLanguage(state));

  /*State*/
  const [collapsed, setCollapsed] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const { pathname } = router;

  const layOutCls = '';
  const logo = require('@src/assets/images/logo.png').default;
  if (pathname === '/digital-marketing') {
    layOutCls = 'marketing-navbar';
    logo = require('@src/assets/images/logo2.png').default;
  }

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
    return () => {
      setIsMounted(true);
    };
  }, []);

  const onChangeLanguage = (item) => {
    dispatch(actionsCommon.setLanguage(item));
  };

  return (
    <header id="header">
      <div id="navbar" className={`crake-nav ${layOutCls}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/">
              <a className="navbar-brand">
                <img src={logo} alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              {navigation && navigation.length ? (
                <ul className="navbar-nav nav ms-auto">
                  {navigation.map((item) => (
                    <li className="nav-item" key={item.id}>
                      <a
                        className="nav-link"
                        href={item.to}
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.titleI18n ? t(item.titleI18n) : item.title}
                      </a>
                      {item.submenu && item.submenu.length ? (
                        <ul className="dropdown_menu">
                          {item.submenu.map((sub, index) => (
                            <li key={sub.id || `sub-${index}`}>
                              <Link activeClassName="active" to={sub.to}>
                                {sub.titleI18n ? t(sub.titleI18n) : sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="ms-auto others-option">
              <ul className="nav__select">
                <li>
                  <Select
                    className="select__language"
                    size="large"
                    onChange={onChangeLanguage}
                    value={lang}
                  >
                    <Option value="vi">
                      <svg
                        width="36"
                        height="25"
                        viewBox="0 0 36 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M36 18.5625C36 21.9797 34.1027 24.75 30.375 24.75H5.625C1.89731 24.75 0 21.9797 0 18.5625V6.1875C0 2.77031 1.89731 0 5.625 0H30.375C34.1027 0 36 2.77031 36 6.1875V18.5625Z"
                          fill="#EC1C24"
                        />
                        <path
                          d="M25.5546 10.104L19.9313 10.1125L18.1859 4.42334L16.4534 10.1125L10.8228 10.104L15.3824 13.5673L13.6161 19.2205L18.1893 15.7099L22.7719 19.2205L21.0018 13.5673L25.5546 10.104Z"
                          fill="#F9CB38"
                        />
                      </svg>
                    </Option>
                    <Option value="en">
                      <svg
                        width="36"
                        height="26"
                        viewBox="0 0 36 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.445 2C34.752 0.809 33.477 0 32 0H18V2H35.445ZM0 20H36V22H0V20ZM18 12H36V14H18V12ZM18 8H36V10H18V8ZM0 16H36V18H0V16ZM4 26H32C33.477 26 34.752 25.191 35.445 24H0.555C1.248 25.191 2.523 26 4 26ZM18 4H36V6H18V4Z"
                          fill="#B22334"
                        />
                        <path
                          d="M0.068 22.679C0.085 22.772 0.104 22.865 0.127 22.956C0.153 23.057 0.185 23.154 0.219 23.252C0.308 23.511 0.416 23.761 0.552 23.995L0.555 24H35.445L35.447 23.996C35.5812 23.7602 35.6924 23.5121 35.779 23.255C35.8449 23.0673 35.8957 22.8747 35.931 22.679C35.972 22.459 36 22.233 36 22H0C0 22.233 0.028 22.458 0.068 22.679ZM0 18H36V20H0V18ZM0 14V16H36V14H18H0ZM18 10H36V12H18V10ZM18 6H36V8H18V6ZM0.555 2L0.552 2.005L0.555 2ZM0.128 3.044C0.153 2.942 0.188 2.845 0.22 2.747C0.185273 2.8447 0.15458 2.94378 0.128 3.044V3.044ZM18 4H36C36 3.767 35.972 3.541 35.931 3.32C35.896 3.12411 35.8448 2.93145 35.778 2.744C35.6913 2.48581 35.5798 2.23665 35.445 2H18V4Z"
                          fill="#EEEEEE"
                        />
                        <path
                          d="M18 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 14H18V0Z"
                          fill="#3C3B6E"
                        />
                        <path
                          d="M2.00098 2.726L2.61898 3.175L2.38298 3.9L2.99998 3.452L3.61798 3.9L3.38198 3.175L3.99998 2.726H3.23598L2.99998 2L2.76498 2.726H2.00098ZM4.00098 4.726L4.61898 5.175L4.38298 5.9L4.99998 5.452L5.61798 5.9L5.38198 5.175L5.99998 4.726H5.23598L4.99998 4L4.76498 4.726H4.00098ZM8.00098 4.726L8.61898 5.175L8.38298 5.9L8.99998 5.452L9.61798 5.9L9.38198 5.175L9.99998 4.726H9.23598L8.99998 4L8.76498 4.726H8.00098ZM12.001 4.726L12.619 5.175L12.383 5.9L13 5.452L13.618 5.9L13.382 5.175L14 4.726H13.236L13 4L12.765 4.726H12.001ZM4.00098 8.726L4.61898 9.175L4.38298 9.9L4.99998 9.452L5.61798 9.9L5.38198 9.175L5.99998 8.726H5.23598L4.99998 8L4.76498 8.726H4.00098ZM8.00098 8.726L8.61898 9.175L8.38298 9.9L8.99998 9.452L9.61798 9.9L9.38198 9.175L9.99998 8.726H9.23598L8.99998 8L8.76498 8.726H8.00098ZM12.001 8.726L12.619 9.175L12.383 9.9L13 9.452L13.618 9.9L13.382 9.175L14 8.726H13.236L13 8L12.765 8.726H12.001ZM6.00098 2.726L6.61898 3.175L6.38298 3.9L6.99998 3.452L7.61798 3.9L7.38198 3.175L7.99998 2.726H7.23598L6.99998 2L6.76498 2.726H6.00098ZM10.001 2.726L10.619 3.175L10.383 3.9L11 3.452L11.618 3.9L11.382 3.175L12 2.726H11.236L11 2L10.765 2.726H10.001ZM14.001 2.726L14.619 3.175L14.383 3.9L15 3.452L15.618 3.9L15.382 3.175L16 2.726H15.236L15 2L14.765 2.726H14.001ZM2.00098 6.726L2.61898 7.175L2.38298 7.9L2.99998 7.452L3.61798 7.9L3.38198 7.175L3.99998 6.726H3.23598L2.99998 6L2.76498 6.726H2.00098ZM6.38298 7.9L6.99998 7.452L7.61798 7.9L7.38198 7.175L7.99998 6.726H7.23598L6.99998 6L6.76498 6.726H6.00098L6.61898 7.175L6.38298 7.9ZM10.001 6.726L10.619 7.175L10.383 7.9L11 7.452L11.618 7.9L11.382 7.175L12 6.726H11.236L11 6L10.765 6.726H10.001ZM14.001 6.726L14.619 7.175L14.383 7.9L15 7.452L15.618 7.9L15.382 7.175L16 6.726H15.236L15 6L14.765 6.726H14.001ZM2.00098 10.726L2.61898 11.175L2.38298 11.9L2.99998 11.452L3.61798 11.9L3.38198 11.175L3.99998 10.726H3.23598L2.99998 10L2.76498 10.726H2.00098ZM6.38298 11.9L6.99998 11.452L7.61798 11.9L7.38198 11.175L7.99998 10.726H7.23598L6.99998 10L6.76498 10.726H6.00098L6.61898 11.175L6.38298 11.9ZM10.001 10.726L10.619 11.175L10.383 11.9L11 11.452L11.618 11.9L11.382 11.175L12 10.726H11.236L11 10L10.765 10.726H10.001ZM14.001 10.726L14.619 11.175L14.383 11.9L15 11.452L15.618 11.9L15.382 11.175L16 10.726H15.236L15 10L14.765 10.726H14.001Z"
                          fill="white"
                        />
                      </svg>
                    </Option>
                  </Select>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;