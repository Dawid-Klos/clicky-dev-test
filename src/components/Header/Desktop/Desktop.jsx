import Logo from 'components/common/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Divider from "components/common/Divider/Divider";

import './Desktop.scss';

const Desktop = () => {

    return (
        <header className="c-header">
            <div className="c-header__wrapper">
                <Logo />
                <Nav isMenuOpen={true} />
            </div>
            <Divider color='blue' />
        </header>
    );
};

export default Desktop;