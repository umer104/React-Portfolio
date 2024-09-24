import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
      num: "01",
      title: "System Admin",
      description: "A System Administrator manages and maintains an organization's IT infrastructure, ensuring system performance, security, and uptime. They handle troubleshooting, automation, and optimization, acting as the backbone of smooth technical operations.",
      to: ""
  },
  {
      num: "02",
      title: "DevOps Engineer",
      description: "A DevOps Engineer bridges development and operations, automating processes to ensure smooth software delivery. They manage CI/CD pipelines, monitor infrastructure, and improve system reliability, fostering collaboration for seamless deployment and scalability.",
      to: ""
  },
  {
      num: "03",
      title: "Web Developer",
      description: "A Web Developer designs, builds, and maintains websites, ensuring they are functional, responsive, and user-friendly. They write clean code, optimize performance, and focus on both front-end and back-end development for seamless user experiences.",
      to: ""
  },
  {
      num: "04",
      title: "Automation Engineer",
      description: "An Automation Engineer designs, develops, and maintains automated systems to enhance efficiency and reduce manual work. They write scripts and optimize workflows to ensure seamless operations and continuous improvement across various processes.",
      to: ""
  },
]

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return <div key={index} className='flex-1 flex flex-col justify-center gap-5 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                <Link to={service.to} className='w-[50px] h-[50px] rounded-full bg-white group-hover:bg-destructive transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl'/>
                </Link>
              </div>
              <h2 className='text-[28px] font-bold leading-none text-white group-hover:text-destructive transition-all duration-500'>{service.title}</h2>
              <p className='text-[14px] text-white/60'>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services