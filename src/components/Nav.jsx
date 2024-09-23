import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' }
];

function Nav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => (
        <Link 
          to={link.path} 
          key={index} 
          className={`${
            link.path === pathname ? "border-b-2 border-destructive" : ""
          } capitalize font-medium hover:text-destructive transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
