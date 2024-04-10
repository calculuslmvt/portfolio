"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

const words = `I am Ayush a Full Stack Developer`;
 
export function TextGenerateEffectDemo({content="", textSize="text-xl"}) {
  return <TextGenerateEffect words= {content} textSize={textSize}/>;
}

export const TextGenerateEffect = ({
  words,
  textSize,
  className,
}: {
  words: string;
  className?: string;
  textSize?:string
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-italic", className)}>
      <div className="mt-4">
        <div className=  {`${textSize} leading-snug tracking-wide`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
