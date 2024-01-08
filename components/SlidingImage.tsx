'use client'

import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const slider1 = [

  {

    color: "#e3e5e7",

    src: "demo.jpg"

  },

  {

    color: "#d6d7dc",

    src: "demo.jpg"

  },

  {

    color: "#e3e3e3",
    src: "demo.jpg"

  },

  {

    color: "#21242b",
    src: "demo.jpg"

  }

]



const slider2 = [

  {

    color: "#d4e3ec",
    src: "demo.jpg"

  },

  {

    color: "#e5e0e1",
    src: "demo.jpg"

  },

  {

    color: "#d7d4cf",
    src: "demo.jpg"

  },

  {

    color: "#e1dad6",
    src: "demo.jpg"

  }

]

function SlidingImage() {

  const cont = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cont,
    offset: ["start end", "end start"]
  })
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])

  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <div
      ref={cont}
      className=' bg-slate-50 flex flex-col gap-[3vw] relative p-12 mb-[100vh]'>
      <motion.div style={{ x: x1 }} className="flex relative gap-[3vw] w-[120vw] left-[-10vw]">
        {
          slider1.map((project, index) => {

            return <div key={index} className=" w-[25%] h-[20vw] center rounded-lg" style={{ backgroundColor: project.color }} >

              <motion.div
                whileHover={{
                  opacity: 0.8,
                }}
                className=" relative w-[80%] h-[80%] rounded-lg overflow-hidden">

                <Image
                  className=' object-cover'
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`} />
              </motion.div>
            </div>

          })

        }

      </motion.div>
      <motion.div style={{ x: x2 }} className="flex relative gap-[3vw] w-[120vw] left-[-10vw]">

        {

          slider2.map((project2, index) => {

            return <div key={index} className=" w-[25%] h-[20vw] center rounded-lg" style={{ backgroundColor: project2.color }} >

              <motion.div
                whileHover={{
                  opacity: 0.8,
                }}
                className=" relative w-[80%] h-[80%] rounded-lg overflow-hidden">

                <Image
                  className=' object-cover'
                  fill={true}
                  alt={"image"}
                  src={`/images/${project2.src}`} />

              </motion.div>

            </div>

          })

        }

      </motion.div>
      <motion.div style={{ height }} className=" relative mt-[100px]">
        <div className=" h-[1550%] w-[120%] left-[-10%] bg-slate-50 slid-bot absolute"></div>
      </motion.div>
    </div>
  )
}

export default SlidingImage