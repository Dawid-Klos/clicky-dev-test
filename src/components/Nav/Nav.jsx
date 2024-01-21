import Link from 'next/link';

import { navItems } from 'data/navItems';
import './Nav.scss';

const Nav = ({ isMenuOpen, toggleMenu }) => {

    return (
        <nav className={`c-nav ${isMenuOpen && 'c-nav--is-open'}`}>
            <ul className='c-nav__list'>
                {navItems.map((item, index) => {
                    return (
                        <li className='c-nav__item' key={item.label + "_" + index}>
                            <Link className='c-nav__link' href={item.href} onClick={toggleMenu}>
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <p className='c-nav__copy'>&copy; ClickyGroup 2024</p>
        </nav>
    );
};

export default Nav;