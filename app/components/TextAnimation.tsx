'use client'
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

interface TextAnimationProps {
  children: React.ReactNode
  animationElements: string
}

const TextAnimation : React.FC<TextAnimationProps> = ({ children, animationElements }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return;

            containerRef.current.style.visibility = "visible";

            // Select all elements to animate: h1 + p
            const elements = containerRef.current.querySelectorAll(animationElements);

            elements.forEach((el) => {
                const { words } = splitText(el);

                animate(
                    words,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                        type: "spring",
                        duration: 2,
                        bounce: 0,
                        delay: stagger(0.1),
                    }
                );
            });
        });
    }, [animationElements]);


    return <div ref={containerRef} className="md:w-1/2 w-full">
        {children}
        <Stylesheet />
    </div>
}



function Stylesheet() {
    return (
        <style>{`
            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
    )
}


export default TextAnimation