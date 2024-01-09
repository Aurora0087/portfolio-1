import React from 'react'
import Magnet from './common/Magnet'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "project-1",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "project-2",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "project-3",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "project-4",
    src: "silencio.png",
    color: "#706D63"
  }
]

function Projects() {
  return (
    <div id='projects' className=' w-screen px-[8vw] py-[8vh] bg-slate-50 text-purple-500'>
      <Magnet>
        <h2 className=' font-semibold text-6xl w-fit'>My Projects -</h2>
      </Magnet>
      <div className=' py-12'>
        {
          projects.map((data, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 50
                }}
                key={index} className=' flex justify-between items-center py-12 px-6 capitalize border-y-2 text-gray-900 bg-slate-100 rounded-lg font-medium hover:text-gray-400'>
                <div className=' text-3xl uppercase'>{data.title}</div>
                <div className=' text-sm text-gray-500'>demo</div>
              </motion.div>
            )
          })
        }
      </div>
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
        className='center'>
        <Magnet>
          <div className=' bg-blue-600 p-3 px-6 rounded-full text-gray-50 font-semibold'>
            Explore
          </div>
        </Magnet>
      </motion.div>
    </div>
  )
}

export default Projects