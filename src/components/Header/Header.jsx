
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';

import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <Logo />
                <Nav />
            </nav>
        </header>
    );
};

export default Header;
