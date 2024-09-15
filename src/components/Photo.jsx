import React from 'react'
import { motion } from 'framer-motion'
import { Image } from 'react-bootstrap'

function Photo() {
  return (
    <div className='w-full h-full relative'>
        <motion.div>
            <div className='w-[198px] h-[168px] xl:w-[398px] xl:h-[368px]'>
                <Image 
                  src='/assets/me.jpeg'
                  priority
                  quality={100}
                  fill
                  alt='Profile Image'
                  className='object-contain'
                />
            </div>
        </motion.div>
    </div>
  )
}

export default Photo