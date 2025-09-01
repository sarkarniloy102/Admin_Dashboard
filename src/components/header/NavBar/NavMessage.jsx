import './nav.css';

const NavMessage = () => {
    return (
        <li className='nav-item dropdown'>
            <a href="#"
                className='nav-link nav-icon'
                data-bs-toggle="dropdown">
                <i className='bi bi-chat-left-text'></i>
                <span className='badge bg-success badge-number'>3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className='dropdown-header'>
                    You Have 3 new messages
                    <a href="#"
                    >
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>view all</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="/src/assets/messages.png" alt="" className="rounded-circle" />
                    </a>
                    <div>
                        <h4>Lorem ipsum </h4>
                        <p>amet consectetur adipisicing elit. </p>
                        <p>30min ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="/src/assets/messages.png" alt="" className="rounded-circle" />
                    </a>
                    <div>
                        <h4>Lorem ipsum </h4>
                        <p>amet consectetur adipisicing elit. </p>
                        <p>30min ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="/src/assets/messages.png" alt="" className="rounded-circle" />
                    </a>
                    <div>
                        <h4>Lorem ipsum </h4>
                        <p>amet consectetur adipisicing elit. </p>
                        <p>30min ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
               
                <li className='dropdown-footer'>
                    <a href="#">Show all notifications</a>
                </li>
            </ul>

        </li>
    );
};

export default NavMessage;