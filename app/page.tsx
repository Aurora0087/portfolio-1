'use client'

import Contact from '@/components/Contact';
import Description from '@/components/Description';
import Landing from '@/components/Landing';
import Preloader from '@/components/Preloader';
import Projects from '@/components/Projects';
import SlidingImage from '@/components/SlidingImage';
import Header from '@/components/header/Header';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0);
      }, 2000)

    })();
  }, []);


  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header/>
      <Landing />
      <Description />
      <Projects />
      <SlidingImage />
      <Contact/>
    </main>
  )
}
