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
      transition: {duration: 1.5}
  },
  closed: {
      opacity: 0,
      transition: {duration: 1}
  }
}

const about = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error illo necessitatibus pariatur consequatur dicta nobis nesciunt quidem quae cumque, soluta quisquam totam, id quasi doloremque tempora. Temporibus laboriosam cumque corrupti?";

function Description() {

  const des = useRef(null);
  const isInview = useInView(des)

  return (
    <div className=' relative bg-purple-500 text-black px-[8vw] py-[8vh] flex gap-6'>
      <div ref={des} className=' font-semibold bg-slate-50 p-8 rounded-lg'>
        {
          about.split(" ").map((word, index) => {
            return <span
              className=' relative overflow-hidden inline-flex'
              key={index}><motion.span variants={slideUp} custom={index} animate={isInview ? "open" : "closed"}>{word + " "}</motion.span></span>
          })
        }
      </div>
      <motion.div
        variants={opacity}
        animate={isInview?"open" :"closed"}
        className=' text-sm text-sky-50 pt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate ipsam obcaecati, ea unde id iure dolor aliquam deleniti amet.
      </motion.div>
      <div className=' absolute bottom-2 right-[10vw]'>
          <Magnet>
          <div className='aspect-square center bg-white font-bold p-6 rounded-full'>
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
      </div>
    </div>
  )
}

export default Description