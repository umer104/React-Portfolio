import React from 'react'
import CountUp from 'react-countup'

const stats = [
    {
        num: "2",
        text: "Years of Experienced",
    },
    {
        num: "6",
        text: "Projects Completed",
    },
    {
        num: "6",
        text: "Technologies Mastered",
    },
    {
        num: "13",
        text: "Github Repositories",
    },
]

function Stats() {
  return (
    <section className='pt-3'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-10 max-w-[80vw] xl:max-w-none'>
                {stats.map((item, index) => {
                    return (
                    <div key={index} className='flex-1 flex gap-5 items-center justify-center xl:justify-start'>
                      <CountUp 
                        end={item.num}
                        duration={5}
                        delay={2}
                        className='text-4xl xl:text-6xl font-extrabold'
                      /> 
                      <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
