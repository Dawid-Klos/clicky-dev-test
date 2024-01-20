import Image from 'next/image';
import Link from 'next/link';

import logo from 'assets/group.svg';

import './Logo.scss';

const Logo = () => {
    return (
        <Link className='logo' href="/">
            <Image className='logo__image' src={logo} alt="ClickyGroup Logo" width={128} height={77} priority />
        </Link>
    );
};

export default Logo;