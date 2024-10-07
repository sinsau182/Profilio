import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/projects/ExpenseTrackher.png'
import project2 from '../../public/projects/AboveAllStrms.png'
import project3 from '../../public/projects/StreamsAdminiora.png'
import project4 from '../../public/projects/Profilio.png'
import project5 from '../../public/projects/GoodBuysApp.png'
import project6 from '../../public/projects/StickyNotesApp.png'
import { motion } from 'framer-motion'
import Transition from '@/components/Transition'

const FramerImage = motion(Image)

const FeaturedProjects = ({type, title, summary, img, link, github}) => {

    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem]
             bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale: 1.05}}
                transition={{duration: 0.2}}
                priority
              sizes='(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
                50vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark sm:px-4 sm:text-base
                    '>
                        Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Projects = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale: 1.05}}
                transition={{duration: 0.2}}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                    className='text-lg font-semibold underline md:text-base'>
                        Visit</Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /></Link>
                    
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Projects | ProCoders</title>
            <meta name="description" content="any description" />
        </Head>
        <Transition />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout classname='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" 
                classname='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProjects 
                        title="Expense Tracker"
                        img={project1}
                        summary="The web application is a comprehensive platform for managing personal and
                         business expenses, offering features like expense tracking with detailed reports 
                         and multi-user support for managing separate profiles. It employs JWT-based authentication 
                         for secure access to each user’s data. Deployed on AWS EC2, the app ensures scalability 
                         and high performance, while a custom domain purchased via Hostinger, secured with SSL certificates,
                          provides users with a professional and secure experience, enabling HTTPS for encrypted communication
                           and protecting sensitive financial information. This solution is designed for efficient expense management
                            with scalability and security in mind."
                          link='https://trackexpenses.site'
                            github='https://github.com/sinsau182/ExpenseTracker'
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProjects 
                        title="Souvera Streams"
                        img={project2}
                        summary="A video-sharing web app that showcases products with dedicated
                         video pages, offering detailed video content and robust security measures. 
                         The app features a mobile-responsive UI, a sidebar with recommended videos 
                         optimized by tags for better discovery, and a user-friendly On-Key Search for
                          quick access to content. Users can bookmark videos after signing up, with a 
                          navbar option for easy retrieval, and filter videos by categories displayed 
                          in the side menu bar."
                         link='https://souvera.cloud'
                            github='https://github.com/sinsau182/SouveraStreams'
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Projects 
                        title="Streams Adminiora"
                        img={project3}
                         link='https://admin.aboveall.site'
                            github='https://github.com/sinsau182/StreamsAdminiora'
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Projects 
                        title="Profilio"
                        img={project4}
                         link='https://profilio.site'
                            github='https://github.com/sinsau182/Profilio'
                            type="Featured Project"
                        />
                    </div>


                    <div className='col-span-6 sm:col-span-12'>
                    <Projects 
                        title="GoodBuys Ecommerce"
                        img={project5}
                         link='https://drive.google.com/file/d/1_2MdlH7Bf1WTO6TjS74l-EANuBjIinPm/view'
                            github='https://github.com/sinsau182/GoodBuys'
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Projects 
                        title="Sticky Notes Mobile App"
                        img={project6}
                         link='https://drive.google.com/file/d/1JGwF9uYVgk06uYuzKsG2mu4K9nx-cMT9/view?usp=drive_link'
                            github='https://github.com/sinsau182/StickyNotesApp'
                            type="Featured Project"
                        />
                    </div>
                </div>

                    

            </Layout>
        </main>
    </>
  )
}

export default projects
