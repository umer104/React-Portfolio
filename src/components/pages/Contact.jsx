import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

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
];

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelect = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phone) formErrors.phone = 'Phone is required';
    if (!formData.service) formErrors.service = 'Please select a service';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    setErrors({});
  
    emailjs.send('service_8ichccc', 'template_yzuxapq', {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      fromEmail: 'umerakmalku@gmail.com',
      fromName: 'Umer Akmal'
    }, 'vx6UJo9iBTXew3vf3')
    .then((result) => {
      setSuccessMessage('Message sent successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, (error) => {
      console.log('Failed to send email. Error: ', error.text);
    });
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[25px]'>
          <div className='xl:h-[54%] xl:w-[64%] order-2 xl:order-none'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-5 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl font-semibold text-destructive'>Let's Work Together</h3>
              <p className='text-white'>Let’s collaborate to create impactful solutions together!</p>

              {successMessage && <p className="text-green-500">{successMessage}</p>}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='text'
                  name='firstName'
                  placeholder={errors.firstName ? errors.firstName : 'First Name'}
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                
                <Input
                  type='text'
                  name='lastName'
                  placeholder={errors.lastName ? errors.lastName : 'Last Name'}
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'border-red-500' : ''}
                />

                <Input
                  type='email'
                  name='email'
                  placeholder={errors.email ? errors.email : 'Email Address'}
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                />

                <Input
                  type='text'
                  name='phone'
                  placeholder={errors.phone ? errors.phone : 'Phone Number'}
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'border-red-500' : ''}
                />
              </div>

              <Select onValueChange={handleSelect}>
                <SelectTrigger className={errors.service ? 'border-red-500' : 'w-full'}>
                  <SelectValue placeholder={errors.service ? errors.service : 'Select a Service'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='System Admin'>System Admin</SelectItem>
                    <SelectItem value='DevOps'>DevOps</SelectItem>
                    <SelectItem value='Web Developer'>Web Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name='message'
                placeholder={errors.message ? errors.message : 'Type Your Message Here.'}
                value={formData.message}
                onChange={handleChange}
                className={`h-[190px] ${errors.phone ? 'border-red-500' : ''}`}
              />

              <Button type="submit" variant="outline" className='max-w-40'>Send Message</Button>
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
  );
}

export default Contact;
