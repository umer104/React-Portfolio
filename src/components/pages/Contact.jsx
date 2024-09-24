import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+92 315-2873306'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'umerakmalku@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Landhi Karachi, Pakistan'
  },
]

function Contact() {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[25px]'>
          <div className='xl:h-[54%] xl:w-[64%] order-2 xl:order-none'>
            <form className='flex flex-col gap-3 p-5 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl font-semibold text-destructive'>Let's Work Together</h3>
              <p className='text-white'>Let’s collaborate to create impactful solutions together!</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='First Name'/>
                <Input type='lastname' placeholder='Last Name'/>
                <Input type='email' placeholder='Email Address'/>
                <Input type='phone' placeholder='Phone Number'/>
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a Service'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='sa'>System Admin</SelectItem>
                    <SelectItem value='do'>DevOps</SelectItem>
                    <SelectItem value='wd'>Web Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea 
                className='h-[200px]'
                placeholder='Type Your Message Here.'
              />

              <Button variant="outline" className='max-w-40' mailto='umerakmalku@gmail.com'>Send Message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-destructive rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h2 className='text-md'>{item.description}</h2>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact