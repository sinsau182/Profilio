import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import picSir from '../../public/profile/picSaurav.png'
import { useInView, useMotionValue, useSpring, } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Transition from '@/components/Transition'

const AnimatedNumbers = ({number}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(number)
        }
    }, [isInView, number, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= number) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, number])

    return (
        <span ref={ref}>
            {number}
        </span>
    )
}

const about = () => {
  return (
    <>
        <Head>
            <title>About Me | ProCoders</title>
            <meta name="description" content="any description" />
        </Head>
        <Transition />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout classname='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" classname='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                    <p className='font-medium'>
                        I am a full-stack developer with a passion for creating innovative web applications and sending them to cloud. 
                        I am dedicated to turning ideas into reality with code and design. 
                        I have a strong foundation in React.js and web development, and I am always looking to learn new technologies and frameworks.
                    </p>
                    <p className='my-4 font-medium'>
                        I have a Bachelors degree in Production and Industrial Engineering from the National Institute of Technology, Kurukshetra. 
                        I have experience working with clients to create custom web applications that meet their needs and exceed their expectations.
                    </p>
                    <p className='font-medium'>
                        I am excited to work with you to bring your vision to life. 
                        Lets create something amazing together!
                    </p>
                </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid 
                            border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                    <Image src={picSir} alt="ProCoders" className='w-full h-auto rounded-2xl'
                    priority
                    sizes='(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                      33vw' />   
                </div>

                <div className='col-span-2 flex flex-col items-end justify-between 
                                xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers number={50} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                        xl:text-center md:text-lg sm:text-base xs:text-sm'>
                        satisfied clients
                        </h2>
                    </div>

                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers number={40} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                        xl:text-center md:text-lg sm:text-base xs:text-sm'>
                        projects completed
                        </h2>
                    </div>
                    
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers number={3} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                        xl:text-center md:text-lg sm:text-base xs:text-sm'>
                        years of experience
                        </h2>
                    </div>
                </div>
            </div>

            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </>
  )
}

export default about
