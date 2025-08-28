import './header.css'
import Logo from './Logo';
import Nav from './NavBar/Nav';
import SearchBar from './SearchBar';


const Header = () => {
    return (
        <header id='header'
            className='header fixed-top d-flex align-items-center'>
            {/* logo */}
            <Logo />
            {/* search bar */}
            <SearchBar />
            {/* nav */}
            <Nav />

        </header >
    );
};

export default Header;