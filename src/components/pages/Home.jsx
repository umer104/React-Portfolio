import React from 'react'
import { Button } from '../ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '../Socials'
import Photo from '../Photo'
import Stats from '../Stats'

function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>  
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>DevOps Engineer</span>
            <h1 className='h2 mb-6'>
              Hello I'm <br /> <span className='h1 text-destructive'>Umer Akmal</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experienced and I am proficient
              in various programming language and technologies.
            </p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
            <a href='assets/resume/Umer_cv.pdf' download>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
            </a>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-8" iconStyles="w-11 h-11 border-2 border-destructive rounded-full 
                flex justify-center items-center text-destructive text-base hover:bg-destructive hover:text-primary
                hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home