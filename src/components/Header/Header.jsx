"use client";

import React, { useState } from "react";

import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Divider from "components/Divider/Divider";

import './Header.scss';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={`c-header ${isMenuOpen && 'c-header--is-active'}`}>
            <Logo />

            <button className='c-header__menu-toggle'
                onClick={toggleMenu}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-label="Toggle menu">

                <svg className={`c-icon ${isMenuOpen && 'c-icon--is-open'}`} viewBox="0 0 100 64" width="32" height="32" aria-hidden="true">
                    <rect className='c-icon__rect-top' width="100" height="10" rx="6"></rect>
                    <rect className='c-icon__rect-middle' y="30" width="100" height="10" rx="6"></rect>
                    <rect className='c-icon__rect-bottom' y="60" width="100" height="10" rx="6"></rect>
                </svg>

            </button>

            <Divider color='blue' />

            <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;
