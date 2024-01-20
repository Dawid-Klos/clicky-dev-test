import Image from 'next/image';
import Link from 'next/link';

import logo from 'assets/group.svg';

import './Logo.scss';

const Logo = () => {
    return (
        <Link className='c-logo' href="/">
            <Image className='c-logo__image' src={logo} alt="ClickyGroup Logo" width={102} height={62} priority />
        </Link>
    );
};

export default Logo;