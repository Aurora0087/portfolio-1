'use client'

import React, { useState } from 'react'
import Nav from './Nav';
import { AnimatePresence, motion } from 'framer-motion';
import Magnet from '../common/Magnet';
import { items } from './NavItems';
import Link from 'next/link';

function Header() {

    const [isActive, setIsLoading] = useState(false);

    return (
        <header className=' absolute top-0 z-10 w-screen px-[15vw] py-5'>
            <div className=' flex justify-end gap-6'>
                {
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
                }
            </div>

            <div className='absolute right-6 top-6 w-12'>
                <Magnet>
                    <div
                        onClick={() => { setIsLoading(!isActive) }}
                        className=' fixed right-4 z-[2000] overflow-hidden center bg-blue-600 rounded-full aspect-square w-12 cursor-pointer'>
                        <div className={`burger relative w-6 h-[5px] ${isActive ? "close-burger" : "open"}`}>
                        </div>
                    </div>
                </Magnet>

                <AnimatePresence mode='wait'>
                    {isActive && <Nav />}
                </AnimatePresence>
            </div>

        </header>
    )
}

export default Header