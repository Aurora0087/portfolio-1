'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import NavItems from './NavItems';

function Nav() {
    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className=' w-80 p-8 pt-[12vh] capitalize fixed z-50 h-screen bg-black right-0 top-0 flex flex-col gap-5 items-center justify-between'>
            <p className=' pb-2 border-b border-blue-500 w-full text-gray-400'>navigation -</p>
            <NavItems />
            <p className=' border-t w-full text-end border-blue-500 pt-2 text-gray-400'>- footer</p>
        </motion.div>
    )
}

export default Nav