import React, { useRef } from 'react'
import Magnet from './common/Magnet'
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

function Contact() {

  const container = useRef(null);

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ["start end", "end end"]

    })

    const x = useTransform(scrollYProgress, [0, 1], [0, 100])

    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])

  return (
    <motion.div id='contact' ref={container} style={{ y }} className=' p-12 text-slate-50 py-[25vh] overflow-hidden'>
      <div className=' border-b pb-[10vh]'>
        <Magnet>
        <h2 className=' font-semibold text-6xl w-fit'>Contact -</h2>
      </Magnet>
      </div>
      <motion.div style={{x}} className=' flex gap-16 p-12'>
        <div className=' rounded-full border py-3 p-6'>
          demo@mail.com
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Contact