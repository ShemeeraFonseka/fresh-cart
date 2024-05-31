import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Link } from "react-scroll";

function NavIcon() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false); // Function to close sidebar

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div >
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{ color: '#006115', backgroundColor: '#eefff2' }} onClick={showSidebar} />
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
                <li key={index} className={item.cName}>
                  <ScrollLink
                    to={item.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={showSidebar} // Close sidebar on link click
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </ScrollLink>
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
