import Link from 'next/link';

const Header = () => {
 return (
    <nav>
       <Link href="/">
             <div>
                <p>
                   PRODUCTS <span>☘</span>
                </p>
             </div>
       </Link>
    </nav>
 );
};

export default Header;