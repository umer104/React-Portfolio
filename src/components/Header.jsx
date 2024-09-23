import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav';

function Header() {
  return (
    <header className='py-6 xl:py-9 text-white'>
        <div className="container mx-auto flex justify-between items-center">
            <Link to='/'>
             <h1 className='text-4xl font-semibold'>
                Umer <span className='text-destructive'>.</span>
             </h1>
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