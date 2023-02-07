import { NavLink } from 'react-router-dom';
import './navBar.scss';

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='wrapper'>
                <div className='nav-item'>
                    <h1>Painting Calculator</h1>
                </div>
                <div className='nav-item'>
                    <ul className='menu'>
                        <li>
                            <NavLink
                                style={({ isActive }) =>
                                    isActive ? { color: '#431183' } : undefined
                                }
                                to='/'
                                end
                            >
                                Main
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                style={({ isActive }) =>
                                    isActive ? { color: '#431183' } : undefined
                                }
                                to='/calc'
                                end
                            >
                                Calculations
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                style={({ isActive }) =>
                                    isActive ? { color: '#431183' } : undefined
                                }
                                to='/edit'
                            >
                                Edit Map Image
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='nav-item'>darkMode</div>
            </div>
        </nav>
    );
};

export default NavBar;
