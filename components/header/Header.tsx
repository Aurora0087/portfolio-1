'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Nav from './Nav';
import { AnimatePresence, motion } from 'framer-motion';
import Magnet from '../common/Magnet';
import { items } from './NavItems';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

function Header() {

    const [isActive, setIsactive] = useState(false);
    const button = useRef(null);

    return (
        <header className=' absolute top-0 z-50 w-screen px-[15vw] py-5'>
            <div className=' flex justify-end gap-6'>
                {/*
                    items.map((data, index) => {
                        return (
                            <Magnet
                                key={index}>
                                <div>
                                    <Link
                                        className=' hover:text-gray-300'
                                        href={data.href}>{data.title}</Link>
                                </div>
                            </Magnet>
                        )
                    })
                */}
            </div>

            <div
                className=' absolute right-6 w-12'>
                <Magnet>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                        }}
                        transition={{
                            delay: 1.5,
                            duration: 0.5
                        }}
                        onClick={() => { setIsactive(!isActive) }}
                        className=' fixed top-6 right-4 z-[500] overflow-hidden center bg-blue-600 rounded-full aspect-square w-12 cursor-pointer'>
                        <div className={`burger relative w-6 h-[5px] ${isActive ? "close-burger" : "open"}`}>
                        </div>
                    </motion.div>
                </Magnet>
                <AnimatePresence mode='wait'>
                    {isActive && <Nav />}
                </AnimatePresence>
            </div>

        </header>
    )
}

export default Header