import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav';

function Header() {
  return (
    <header className='text-white'>
        <div className="container mx-auto my-0 flex justify-between items-center">
            <Link to='/'>
                <img src="assets/logo.png" alt="" className='h-[95px]' />
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link to="/contact">
                 <Button variant="outline">Hire me</Button>
                </Link>
            </div>

            <div className="xl:hidden">
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header