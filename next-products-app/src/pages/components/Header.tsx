import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/next.svg';

const Header = () => {
 return (
    <nav className='navigation'>
       <Link href="/">
             <Image src={Logo}
             alt='logo'
             width={50}
             height={50}
             className="navigation__logo"
             />
       </Link>
       <h1 className="navigation__title">Read this page!</h1>
    </nav>
 );
};

export default Header;