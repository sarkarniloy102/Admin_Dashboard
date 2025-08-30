import './nav.css';

const NavNotice = () => {
    return (
        <li className='nav-item dropdown'>
            <a href="#"
                className='nav-link nav-icon'
                data-bs-toggle="dropdown">
                <i className='bi bi-bell'></i>
                <span className='badge bg-primary badge-number'>4</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className='dropdown-header'>
                    You Have 4 new notifications
                    <a href="#"
                    >
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>view all</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notifications-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Lorem ipsum </h4>
                        <p>amet consectetur adipisicing elit. </p>
                        <p>30min ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notifications-item'>
                    <i className='bi bi-circle text-danger'></i>
                    <div>
                        <h4>Atque rerum nesciunt </h4>
                        <p> Perspiciatis error quos beatae,  </p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notifications-item'>
                    <i className='bi bi-check-circle text-success'></i>
                    <div>
                        <h4>sit rerum fuga </h4>
                        <p> Esse autem reiciendis nam?,  </p>
                        <p>2 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notifications-item'>
                    <i className='bi bi-info-circle text-primary'></i>
                    <div>
                        <h4>Dicta </h4>
                        <p> Quae dolorem earum veritatis oditseno  </p>
                        <p>4 hr. ago</p>
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

export default NavNotice;