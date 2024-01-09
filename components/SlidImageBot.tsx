'use client'

import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';

function SlidImageBot({bg}:{bg:string}) {

    const contt = useRef(null);

    const { scrollYProgress } = useScroll({
        target: contt,
        offset: ["start end", "end start"]
    })

    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={contt} className=' flex justify-center w-screen'>
            <motion.div style={{ height }} className=" relative z-20">
                <div className={`h-[1550%] w-screen slid-bot ${bg}`}></div>
            </motion.div>
        </div>
    )
}

export default SlidImageBot