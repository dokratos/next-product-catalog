import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
 return (
    <div>
       <Header />
       {children}
       <Footer />
    </div>
 );
};
export default Layout;