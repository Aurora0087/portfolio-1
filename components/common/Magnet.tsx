'use client'

import React, { ReactElement, useEffect, useRef } from 'react'
import gsap from 'gsap';

interface MagnetProps {
    children: ReactElement;
}

export default function Magnet({ children }: MagnetProps): ReactElement {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (magnetic.current) {
            const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
            const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

            const handleMouseMove = (e: MouseEvent) => {
                console.log(e)
                console.log(magnetic.current!.getBoundingClientRect())
                const { clientX, clientY } = e;
                const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                xTo(x * 0.35);
                yTo(y * 0.35);
            };

            const handleMouseLeave = () => {
                xTo(0);
                yTo(0);
            };

            magnetic.current.addEventListener('mousemove', handleMouseMove);
            magnetic.current.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                if (magnetic.current) {
                    magnetic.current.removeEventListener('mousemove', handleMouseMove);
                    magnetic.current.removeEventListener('mouseleave', handleMouseLeave);
                }
            };
        }
    }, [magnetic]);

    return (
        React.cloneElement(children, { ref: magnetic })
    )
}