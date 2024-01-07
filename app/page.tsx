'use client'

import Contact from '@/components/Contact';
import Description from '@/components/Description';
import Landing from '@/components/Landing';
import Preloader from '@/components/Preloader';
import Projects from '@/components/Projects';
import SlidingImage from '@/components/SlidingImage';
import Header from '@/components/header/Header';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const locoScroll = useRef(null)

  useEffect(() => {
    (async () => {
      
      const locomotiveScroll = new LocomotiveScroll(
      {
        el: locoScroll.current!,
        smooth:true,
      }
    );

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0);
      }, 2000)

    })();
    
  }, []);


  return (
    <>
    {!isLoading && <Header/>}
      <main ref={locoScroll}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description/>
      <Projects />
      <SlidingImage />
      <Contact/>
      </main>
      
    </>
    
  )
}
