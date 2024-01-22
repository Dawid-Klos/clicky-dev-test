import React, { useState } from "react";

import Logo from 'components/common/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Divider from "components/common/Divider/Divider";

import './Mobile.scss';

const Mobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={`c-header@mobile ${isMenuOpen && 'c-header@mobile--is-active'}`}>
            <div className="c-header@mobile__wrapper">
                <Logo />
                <button className='c-header@mobile__menu-toggle'
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
            </div>

            <Divider color='blue' />
            <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
}

export default Mobile;