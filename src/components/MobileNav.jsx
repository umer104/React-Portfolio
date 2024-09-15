import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci'

const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
];

function MobileNav() {
    const location = useLocation();
    const pathname = location.pathname;

  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-destructive'/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='pt-10 pb-10 text-center text-2xl'>
            <Link to='/'>
             <h1 className='text-4xl font-semibold'>
                Umer <span className='text-destructive'>.</span>
             </h1>
            </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) => {
                return (
                <Link 
                    to={link.path} 
                    key={index} 
                    className={`${
                    link.path === pathname ? "border-b-2 border-destructive" : ""
                    } text-xl capitalize hover:text-destructive transition-all`}>
                    {link.name}
                </Link> )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav