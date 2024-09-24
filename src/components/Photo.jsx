import React from 'react'
import { motion } from 'framer-motion'
import { Image } from 'react-bootstrap'

function Photo() {
  return (
    <div className='w-full h-full'>
        <motion.div
         initial={{opacity: 0}}
         animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.2, ease: 'easeIn' },
         }}
        >
            <motion.div
            initial={{opacity: 0}}
            animate={{
             opacity: 1,
             transition: { delay: 2.4, duration: 0.3, ease: 'easeInOut' },
            }}
            className='w-[248px] h-[248px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute'>
                <Image 
                  src='/assets/pic.png'
                  priority
                  quality={100}
                  fill
                  alt='Profile Image'
                  className='object-contain rounded-full mix-blend-lighten'
                />
            </motion.div>

            <motion.svg className="w-[250px] xl:w-[406px] h-[250px] xl:h-[406px]"
            fill="transparent"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle 
              cx="253" 
              cy="253" 
              r="250" 
              stroke="#ef4444" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                strokeDasharray: "24 10 0 0",
              }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }} />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo