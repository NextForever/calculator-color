import './navBar.scss';

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='wrapper'>
                <div className='nav-item'>
                    <h1>Painting Calculator</h1>
                </div>
                <div className='nav-item'>Сумма</div>
                <div className='nav-item'>--</div>
                <div className='nav-item'>darkMode</div>
            </div>
        </nav>
    );
};

export default NavBar;
