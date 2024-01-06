'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { slide } from './anim';
import Magnet from '../common/Magnet';

export const items = [

    {
        title: "Home",
        href: "/",
    },
    {
        title: "projects",
        href: "#projects",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Contact",
        href: "#contact",
    },
]

function NavItems() {
    return (
        <div className=' py-4 flex gap-2 flex-col text-4xl'>
            {
                items.map((data, index) => {
                    return (
                        <Magnet
                            key={index}>
                            <motion.div
                                custom={index}
                                variants={slide}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                <Link
                                    className=' hover:text-blue-500'
                                    href={data.href}>{
                                        data.title
                                    }</Link>
                            </motion.div>
                        </Magnet>

                    )
                })
            }
        </div>
    )
}

export default NavItems