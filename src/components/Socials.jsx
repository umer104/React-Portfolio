import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: "https://github.com/umer104" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/umer-khan-%F0%9F%87%B5%F0%9F%87%B8-30864b27b/" },
]

function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} to={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials