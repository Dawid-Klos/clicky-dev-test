import Link from 'next/link';

import { navItems } from 'data/navItems';
import './Nav.scss';

const Nav = () => {


    return (
        <ul className='nav'>
            {navItems.map((item, index) => {
                return (
                    <li className='nav__item' key={item.label + "_" + index}>
                        <Link className='nav__link' href={item.href}>
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Nav;