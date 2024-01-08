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
        xPercent += 0.1 * direction;
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
                <div ref={slider} className="slider relative whitespace-nowrap text-[18vw]">
                    <p className=' font-medium pr-[1rem]' ref={firstText}>Web Developer -</p>
                    <p className=' absolute left-[100%] top-0 font-medium pr-[1rem]' ref={secondText}>Web Developer -</p>
                </div>
            </div>
            <div className="description absolute top-[10%] left-[65%] text-[5vw] font-light">
                <svg
                    width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                </svg>
                <p className=' mb-3'>HI THERE</p>
                <p className=' mb-3'>I AM <span className=' text-blue-500 font-mono'>dEb</span>,</p>
            </div>
        </motion.main>
    )
}