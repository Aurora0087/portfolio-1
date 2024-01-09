'use client'

import Image from 'next/image'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const trdText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    const slideUp = {
        initial: {
            y: 300
        },
        enter: {
            y: 0,
            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 }
        }
    }

    useLayoutEffect(() => {
        
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        gsap.set(trdText.current,{xPercent:xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.05 * direction;
    }

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className="relative flex h-screen overflow-hidden">
            <Image
                className=' object-cover'
                src="/images/bg.png"
                fill={true}
                alt="background"
            />
            <div className=" absolute bottom-[5%]">
                <div ref={slider} className="slider relative whitespace-nowrap text-[16vw]">
                    <p className=' font-medium pr-[1rem]' ref={firstText}>Web Developer - Web Developer -</p>
                    <p className=' absolute left-[100%] top-0 font-medium pr-[1rem]' ref={secondText}>Web Developer - Web Developer -</p>
                </div>
            </div>
            <div className="description absolute top-[15vh] right-[10vw] text-4xl font-light">
                <p className=' mb-3'>HI THERE</p>
                <p className=' mb-3'>I AM <span className=' text-blue-500 font-mono'>dEb</span>,</p>
            </div>
        </motion.main>
    )
}