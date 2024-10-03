import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useRef } from 'react'
import article1 from '../../public/articles/pagination component in reactjs.jpg'
import article2 from '../../public/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/articles/create modal component in react using react portals.png'
import article4 from '../../public/articles/form validation in reactjs using custom react hook.png'
import article5 from '../../public/articles/smooth scrolling in reactjs.png'
import article6 from '../../public/articles/todo list app built using react redux and framer motion.png'
import article7 from '../../public/articles/What is higher order component in React.jpg'
import article8 from '../../public/articles/What is Redux with easy explanation.png'
import Transition from '@/components/Transition'

const FramerImage = motion(Image)

const MovingImg = ({ img, title, link }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imageRef = useRef(null)

    function handleMouseMove(event) {
        imageRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event) {
        imageRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target='_blank'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            style={{ x: x, y: y }}
            initial={{opacity: 0}}
            whileInView={{opacity: 1, transition: {duration: 0.2}}}
            ref={imageRef} src={img} alt={title} className='z-10 w-96 h-auto rounded-lg hidden absolute md:!hidden' />
        </Link>
    )
}

const Articles = ({ img, title, date, link }) => {
    return (
        <motion.li 
        initial={{y: 200}}
        whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col
        '>
            <MovingImg img={img} title={title} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl
            ' />
            <Link href={link} target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'
                />
            </Link>

            <Link href={link} target='_blank'
                className=''>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
            </Link>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Articles Page | ProCoders</title>
                <meta name="description" content="any description" />
            </Head>
            <Transition />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout classname='pt-16'>
                    <AnimatedText text="Words Can Change The World!" classname='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticles
                            title='Build A Custom Pagination Component In Reactjs From Scratch'
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time='9 min read'
                            link="https://medium.com"
                            img={article1} />

                        <FeaturedArticles
                            title='Build A Custom Pagination Component In Reactjs From Scratch'
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time='9 min read'
                            link="https://medium.com"
                            img={article2} />
                    </ul>

                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article3} />
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article4} />
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article5} />
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article6} />
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article7} />
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article8} />
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article3} />
                        <Articles
                            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date="July 12, 2021"
                            link="https://medium.com"
                            img={article3} />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
