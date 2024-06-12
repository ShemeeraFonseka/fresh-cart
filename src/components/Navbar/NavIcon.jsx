import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';

function NavIcon() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false); // Function to close sidebar

  const handleClick = (path) => {
    closeSidebar(); // Close sidebar when navigating
    if (path === 'login') {
      navigate('/login'); // Navigate to the login route
    } else {
      navigate(`/${path}`); // Navigate to other routes
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{ color: '#006115', backgroundColor: '#ffff' }} onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars-close' onClick={closeSidebar}>
                <AiIcons.AiOutlineClose style={{ backgroundColor: 'rgb(49, 158, 49)' }}/>
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={() => handleClick(item.path)}>
                  <Link
                    to={item.path}
                    onClick={showSidebar} // Close sidebar on link click
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavIcon;
