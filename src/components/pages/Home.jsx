import React from 'react'
import { Button } from '../ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '../Socials'
import Photo from '../Photo'

function Home() {
  return (
    <section>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-0'>
          <div className='text-center xl:text-left'>
            <span className='text-xl'>DevOps Engineer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br /> <span className='text-destructive'>Umer Akmal</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experienced and I am proficient
              in various programming language and technologies.
            </p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-9" iconStyles="w-10 h-10 border border-destructive rounded-full 
                flex justify-center items-center text-destructive text-base hover:bg-destructive hover:text-primary
                hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home