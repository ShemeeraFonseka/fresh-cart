import React from 'react';
import { RxDashboard } from "react-icons/rx";
import * as IoIcons from 'react-icons/io';
import { CgProfile } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";

export const NavbarData = [
  
  {
    title: 'Our Picks',
    path: 'portfolio',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  
  {
    title: 'Services',
    path: 'works',
    icon: <CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: 'contact',
    icon: <CgProfile />,
    cName: 'nav-text'
  }
];