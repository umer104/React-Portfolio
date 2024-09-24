import React from 'react'
import { SiAnsible, SiTerraform, SiPrometheus, SiKubernetes, SiApache, SiNginx, SiMysql, SiGnubash, SiReact, SiPython, SiLinux, SiDocker } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { ScrollArea } from '../ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
  title: "About me",
  description: "I am a tech enthusiast skilled in React and Python, focused on creating dynamic user interfaces and robust applications. I manage databases with MySQL, work in Linux environments, and automate tasks with Bash. I have experience in web server management using Apache and Nginx, utilize Docker for containerization, and Kubernetes for orchestration. I automate processes with Ansible and manage infrastructure with Terraform, while using Prometheus for monitoring.",
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
      fieldValue: "Urdu, English"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'As a System Administrator, I manage IT infrastructure. As a DevOps Engineer, I automate processes and CI/CD pipelines. As a Web Developer, I design responsive websites, and as an Automation Engineer, I enhance efficiency through automation.',
  items: [
    {
      company: 'Mindflare Technologies',
      position: 'Jr DevOps Engineer',
      duration: '2024 - present',
    },
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
  description: 'I completed the DevOps Engineer - Learning Path at KodeKloud (2024), a DevOps Diploma from Al Nafi (2023), a Cloud Cyber Security Diploma (2022), and a degree in Computer Information Technology from Aligarh Institute of Technology (2018-2021).',
  items: [
    {
      institute: 'KodeKloud',
      position: 'DevOps Engineer - Learning Path',
      duration: '2024',
    },
    {
      institute: 'Al Nafi',
      position: 'Development Operation\'s Diploma',
      duration: '2023 - 2024',
    },
    {
      institute: 'Al Nafi',
      position: 'Cloud Cyber Security Diploma',
      duration: '2022 - 2023',
    },
    {
      institute: 'Aligarh Institute of Technology',
      position: 'Computer Information Technology',
      duration: '2018 - 2021',
    },
  ]
}

const skills = {
  title: 'My Skills',
  description: 'I specialize in React and Python, with skills in MySQL, Linux, and Bash. I manage servers with Apache and Nginx, use Docker and Kubernetes, and automate with Ansible. I also work with Terraform for infrastructure and Prometheus for monitoring.',
  skillList: [
    {
      icon: <SiReact />,
      name: 'React',
    },
    {
      icon: <SiPython />,
      name: 'Python',
    },
    {
      icon: <SiMysql />,
      name: 'Mysql',
    },
    {
      icon: <SiLinux />,
      name: 'Linux',
    },
    {
      icon: <SiGnubash />,
      name: 'Bash',
    },
    {
      icon: <SiApache />,
      name: 'Apache',
    },
    {
      icon: <SiNginx />,
      name: 'Nginx',
    },
    {
      icon: <SiDocker />,
      name: 'Docker',
    },
    {
      icon: <SiKubernetes />,
      name: 'Kubernetes',
    },
    {
      icon: <SiAnsible />,
      name: 'Ansible',
    },
    {
      icon: <SiTerraform />,
      name: 'Terraform',
    },
    {
      icon: <SiPrometheus />,
      name: 'Prometheus',
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
              <div className='flex flex-col gap-[15px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[380px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[25px]'>
                    {experience.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[174px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-destructive'>{item.duration}</span>
                        <h3 className='text-lg max-w-[260px] min-h-[40px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-destructive'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[15px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[380px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[25px]'>
                    {education.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[174px] py-2 px-12 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-destructive'>{item.duration}</span>
                        <h3 className='text-lg max-w-[260px] min-h-[40px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-destructive'></span>
                          <p className='text-white/60'>{item.institute}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='skills' className='w-full h-full'>
              <div className="flex flex-col gap-[20px]">
                <div className='flex flex-col gap-[40px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-[120px] h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group '>
                            <div className='text-5xl group-hover:text-destructive transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-3'>
                      <span className='text-white/60 hover:text-destructive'>{item.fieldName}</span>
                      <span className='w-[6px] h-[6px] rounded-full bg-destructive'></span>
                      <span className='text-lg'>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume