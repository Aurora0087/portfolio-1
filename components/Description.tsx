'use client'

import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import Magnet from './common/Magnet';
import Link from 'next/link';

const slideUp = {
  initial: {
    y: "100%"
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i }
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 }
  }
}

const opacity = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: { duration: 1.5 }
  },
  closed: {
    opacity: 0,
    transition: { duration: 1 }
  }
}

const about = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error illo necessitatibus pariatur consequatur dicta nobis nesciunt quidem quae cumque, soluta quisquam totam, id quasi doloremque tempora. Temporibus laboriosam cumque corrupti?";

function Description() {

  const des = useRef(null);
  const isInview = useInView(des)

  return (
    <div id='about' className=' relative bg-purple-500 text-black px-[8vw] py-[8vh] flex gap-12 flex-col sm:flex-row items-center'>
      <div
        ref={des} className='font-semibold bg-slate-50 py-16 p-8 rounded-lg flex flex-wrap gap-x-1 h-fit'>
        {
          about.split(" ").map((word, index) => {
            return <span
              className=' relative overflow-hidden inline-flex hover:text-purple-500'
              key={index}><motion.span variants={slideUp} custom={index} animate={isInview ? "open" : "closed"}>{word + " "}</motion.span></span>
          })
        }
      </div>
      <motion.div
        variants={opacity}
        animate={isInview ? "open" : "closed"}
      className='center'>
        <Magnet>
          <div className='aspect-square center bg-white font-bold p-12 rounded-full'>
            <span
              className=' relative overflow-hidden inline-flex text-slate-900'>
              |
              <motion.span
                className=' ml-1 text-purple-500'
                variants={slideUp} custom={6} animate={isInview ? "open" : "closed"}>
                About
              </motion.span>
            </span>
          </div>
        </Magnet>
      </motion.div>
    </div>
  )
}

export default Description