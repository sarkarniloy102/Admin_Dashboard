import './header.css'
import Logo from './Logo';
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

        </header >
    );
};

export default Header;