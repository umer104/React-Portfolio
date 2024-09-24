import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WorkSliderBtns from '../WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'Ecommerce k8s',
    title: 'Ecommerce - k8s',
    description: 'This project deploys an e-commerce application on a Kubernetes cluster for scalability and high availability, optimizing performance and streamlining operations.',
    stack: [{name: 'Docker'}, {name: 'Kubernetes'}, {name: 'React'}, {name: 'Django'}],
    image: 'assets/work/pro1.png',
    github: 'https://github.com/umer104?tab=repositories',
  },
  {
    num: '02',
    category: 'Ansible ECS',
    title: 'Ansible ECS',
    description: 'This project automates application deployment to Amazon ECS using Ansible, enhancing efficiency and consistency in managing containerized services.',
    stack: [{name: 'Ansible'}, {name: 'ECS'}, {name: 'ECR'}, {name: 'Docker'}],
    image: 'assets/work/pro2.png',
    github: 'https://github.com/umer104?tab=repositories',
  },
  {
    num: '03',
    category: 'Static Portfolio',
    title: 'Static Portfolio',
    description: 'Developed a frontend portfolio website associated with Aligarh Institute of Technology, showcasing my skills in HTML5, CSS, and Bootstrap.',
    stack: [{name: 'HTML'}, {name: 'CSS'}, {name: 'Bootstrap'}],
    image: 'assets/work/pro3.png',
    github: 'https://github.com/umer104?tab=repositories',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
  
    setProject(projects[currentIndex])
  };

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-destructive transition-all duration-500 capitalize'>{project.category}</h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex flex-wrap gap-4 '>
                {project.stack.map((item, index) => {
                  return <li key={index} className='text text-destructive'>
                    {item.name}
                    {index !== project.stack.length -1 && ',  '}
                  </li>
                })}
              </ul>
              <div className='border border-white/20'></div>
                <div>
                  <Link to={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-destructive'/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[510px] mb-8 xl:mb-0' onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                <SwiperSlide key={index} className='w-full'>
                  <div className='relative group flex justify-center items-center bg-pink-50/20'>
                  <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                  <div className='relative w-full h-full'>
                    <img src={project.image} fill className='object-cover w-full h-full' alt=''/>
                  </div>
                  </div>
                </SwiperSlide>
                )
              })}
              <WorkSliderBtns containerStyles='flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max 
              xl:justify-none' btnStyles='bg-destructive hover:bg-destructive-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center 
              items-center'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work