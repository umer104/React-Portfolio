import React from 'react'
import { SiAnsible, SiTerraform, SiPrometheus, SiKubernetes, SiApache, SiNginx, SiMysql, SiGnubash, SiReact, SiPython, SiLinux, SiDocker } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { ScrollArea } from '../ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
  title: "About me",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Umer Akmal"
    },
    {
      fieldName: "Phone",
      fieldValue: "+92 303-2364803"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Whatsapp",
      fieldValue: "+92 315-2873306"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani"
    },
    {
      fieldName: "Email",
      fieldValue: "umerakmalku@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "Urdu, Pashto, English"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  items: [
    {
      company: 'Autotelematics Pvt Ltd',
      position: 'System Administrator',
      duration: '2023 - present',
    },
    {
      company: 'Al Nafi',
      position: 'DevOps - Intership',
      duration: '2023 - 2024',
    },
    {
      company: 'Naveena Denim Mills',
      position: 'Quality Control',
      duration: '2020 - 2022',
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  items: [
    {
      institute: 'KodeKloud',
      position: 'DevOps Engineer - Learning Path',
      duration: '2024',
    },
    {
      institute: 'Al Nafi',
      position: 'DevOps Diploma',
      duration: '2023 - 2024',
    },
    {
      company: 'Al Nafi',
      position: 'Cloud Cyber Security Diploma',
      duration: '2022 - 2023',
    },
    {
      company: 'Aligarh Institute of Technology',
      position: 'Computer Information Technology',
      duration: '2018 - 2021',
    },
  ]
}

const skills = {
  title: 'My Education',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  skillList: [
    {
      icon: <SiReact />,
      name: 'React',
    },
    {
      icon: <SiPython />,
      name: 'React',
    },
    {
      icon: <SiMysql />,
      name: 'React',
    },
    {
      icon: <SiLinux />,
      name: 'React',
    },
    {
      icon: <SiGnubash />,
      name: 'React',
    },
    {
      icon: <SiApache />,
      name: 'React',
    },
    {
      icon: <SiNginx />,
      name: 'React',
    },
    {
      icon: <SiDocker />,
      name: 'React',
    },
    {
      icon: <SiKubernetes />,
      name: 'React',
    },
    {
      icon: <SiAnsible />,
      name: 'React',
    },
    {
      icon: <SiTerraform />,
      name: 'React',
    },
    {
      icon: <SiPrometheus />,
      name: 'React',
    },
  ]
}

function Resume() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.4, duration: 0.4, ease: 'easeIn'}}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[380px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[25px]'>
                    {experience.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[164px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-destructive'>{item.duration}</span>
                        <h3 className='text-lg max-w-[260px] min-h-[40px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex '>
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='education' className='w-full'>
              education
            </TabsContent>

            <TabsContent value='skills' className='w-full'>
              skills
            </TabsContent>

            <TabsContent value='about' className='w-full'>
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume