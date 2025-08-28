import './nav.css'
import NavAvatar from './NavAvatar';
import NavMessage from './NavMessage';
import NavNotice from './NavNotice';
const Nav = () => {
    return (
        <div className='header-nav ms-auto'>
            <ul className='d-flex align-items-center'>
                <NavNotice />
                <NavMessage />
                <NavAvatar />
            </ul>
        </div>
    );
};

export default Nav;