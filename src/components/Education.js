import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute top-0.5 left-9 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                type="Bachelor of Technology in Production and Industrial Engineering"
                time="2020 - 2024" 
                place="National Institute of Technology, Kurukshetra"
                info="I have done my Bachelor's in Production and Industrial Engineering under 
                (Mechanical Department) from the National Institute of Technology, Kurukshetra with 
                a CGPA of 8.7125/10 . And apart from the curriculum, I have also done some projects and internships 
                 in relevant field to Computer Science and technology to enhance my skills and knowledge."
                />

                <Details 
                type="Intermediate, (Class 11-12th) in Science Stream with PCM "
                time="2017 - 2019 | CBSE 2019" 
                place="Gyan Bharti Senior Sec. School, Gaya"
                info="I have passed my Intermediate examination with PCM (Physics, Chemistry, Mathematics)
                    by Central Board of Secondary Education (CBSE) from Gyan Bharti Senior Sec. School, Gaya
                    with 76.6% marks."
                />

                <Details 
                type="Matriculation, (Class 10th)"
                time="2017 - 2019 | CBSE 2017" 
                place="PM Modern Academy, Gaya"
                info="I have passed my class 10th Boards Examination 
                held and evaluated by Central Board of Secondary Education (CBSE)
                with a excellent score of 10/10 CGPA."
                />

            </ul>
        </div>
    </div>
  )
}

export default Education
