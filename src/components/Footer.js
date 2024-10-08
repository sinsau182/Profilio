import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout classname='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                by&nbsp; <Link href="https://www.linkedin.com/in/saurav-singh-15320a218/" className='underline
                underline-offset-2 
                ' target={"_blank"}
                >SinghSaurav</Link>
            </div>
            <Link href="https://wa.me/918825398529?text=Hey%20Saurav%2C%20your%20work%20interests%20me.%20Let%27s%20connect%21" target={"_blank"}
            className='underline
                underline-offset-2'
            >Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
