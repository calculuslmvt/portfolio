"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { AnimatedPinCard } from "./3d-pin";


const content = [
    {
      title: "Amazon SDE Intern",
      description:
        "Designed and created features consisting Server-side and frontend enhancements for vendor facing chatbot, Which 2x the percentage of chatbot adoption.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--slate-500),var(--slate-800))]">
          <Image
            src="/Amazon_icon.svg"
            fill
            style={{
                objectFit: 'contain', // cover, contain, none
                borderRadius: '3%'
            }}
            className="h-full w-full object-cove p-1"
            alt="linear board demo"
          />
        </div>
        
      ),
    },
    {
      title: "Tech Stack used",
      description:
        "Worked on JavaScriptJs | AmazonUI | NodeJs | AWS | CDK | Javascript | JAVA | Deployments pipelines | HLD | LLD.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white ">
          <Image
            src="/Amazon_icon.svg"
            fill
            style={{
                objectFit: 'contain', // cover, contain, none
                borderRadius: '3%'
            }}
            className="h-full w-full object-cove p-1"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Testing",
      description:
        "Implemented thorough testing of the integrated features via Unit testing and Integration testing.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--slate-500),var(--slate-800))] flex items-center justify-center text-white">
           <Image
            src="/Amazon_icon.svg"
            fill
            style={{
                objectFit: 'contain', // cover, contain, none
                borderRadius: '3%'
            }}
            className="h-full w-full object-cove p-1"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Monitoring Systems",
      description:
        "Designed and developed monitoring system for multiple services by utilising CDK and AWS cloudwatch generating metrics and proper logging mechanism.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--teal-800))] flex items-center justify-center text-white">
           <Image
            src="/Amazon_icon.svg"
            fill
            style={{
                objectFit: 'contain', // cover, contain, none
                borderRadius: '3%'
            }}
            className="h-full w-full object-cove p-1"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Time - 6 months",
      description:
        "",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--teal-800))] flex items-center justify-center text-white">
           <Image
            src="/Amazon_icon.svg"
            fill
            style={{
                objectFit: 'contain', // cover, contain, none
                borderRadius: '3%'
            }}
            className="h-full w-full object-cove p-1"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  
  export function StickyScrollReveal() {
    return (
      <div className="bg-opacity-10">
        <StickyScroll content={content} />
      </div>
    );
  }



export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [

    "var(--transparent)",
    "var(--transparent)",
    "var(--transparent)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] no-scrollbar overflow-y-auto flex justify-center relative  rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
