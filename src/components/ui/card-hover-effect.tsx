import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export function CardHoverEffect() {
    return (
      <div className="max-w-5xl mx-auto px-8 py-10">
        <HoverEffect items={projects} />
      </div>
    );
  }

  export const projects = [
    {
      title: "ZenStream",
      description:
        "It is a robust, industry-grade full stack application inspired by Youtube, featuring a comprehensive authentication system, built with NextJs, Express.js, MongoDB.",
      link: "https://zenstreamlite.vercel.app/",
      image: "/zenStream.svg"
    },
    {
      title: "BuyCars",
      description:
        "It is a E-commerce website for buying and selling cars . It gives dealers ability to Add new cars and deals for selling and monitor there sales",
      link: "https://nervesparks-frontend.vercel.app/",
      image: "/Svelte.png"
    },
    {
      title: "ZenChat",
      description:
        "It is a WebRTC website which enables direct peer to peer communication via video calls, video streaming and unlimited file sharing.",
      link: "",
      image: "/zenChat.svg"
    },

    {
      title: "Resume",
      description:
        "Linkedin Link",
      link: "https://drive.google.com/file/d/1H20o4uXxnIWyKCbLiEBRGEWPNRr4Qzvz/view?usp=sharing",
      image: "/googleDrive.svg"
    },
  ];


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardImage>{item.image}</CardImage>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-transparent/80 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardImage = ({
    children="",
  }) => { 
    return (
        <div className="border-2 h-36 rounded-md" style={{ position: 'relative'}}>
            <Image
                alt="Mountains"
                src={children}
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                    objectFit: 'cover', // cover, contain, none
                    borderRadius: '3%'
                }}
            />
        </div>

    );
  };
