import Link from 'next/link';

import './Nav.scss';

const Nav = () => {

    const navItems = [
        {
            label: 'Link One',
            href: '/'
        },
        {
            label: 'Link Two',
            href: '/'
        },
        {
            label: 'Link Three',
            href: '/'
        },
        {
            label: 'Link Four',
            href: '/'
        },
        {
            label: 'Link Five',
            href: '/'
        },
        {
            label: 'Link Six',
            href: '/'
        }
    ];

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