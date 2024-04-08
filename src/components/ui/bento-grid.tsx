import { cn } from "@/utils/cn";
import { icons } from "@tabler/icons-react";
import { MovingBorderDemo } from "./moving-borders";
import { HoverBorderGradientDemo } from "./hover-border-gradient"; 

export function BentoGridDemo() {
    return (
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    );
  }

  const Skeleton = ({imgLink=" ", contentDiv= <div></div>}) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img src = {imgLink}/>   
        <div className="p-4">
            {contentDiv}
        </div>
    </div>
  );


  const techStackDiv = (
    <div className="flex flex-wrap gap-4">
        <HoverBorderGradientDemo content="ReactJs"/>
        <HoverBorderGradientDemo content="NextJs"/>
        <HoverBorderGradientDemo content="ExpressJs"/>
        <HoverBorderGradientDemo content="NodeJs"/>
        <HoverBorderGradientDemo content="C++"/>
        <HoverBorderGradientDemo content="JAVA"/>
        <HoverBorderGradientDemo content="AWS"/>
        <HoverBorderGradientDemo content="MongoDB"/>
        <HoverBorderGradientDemo content="Python"/>
        <HoverBorderGradientDemo content="Javascript"/>
        
    </div>
    
    
  );

  const items = [
    {
      title: "SDE Intern Amazon",
      description: "Explore the birth of groundbreaking ideas and inventions.Explore the birth of groundbreaking ideas and inventionsExplore the birth of groundbreaking ideas and inventions",
      header: <Skeleton imgLink="data:image/png;base64,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"/>,
      icon: "Bangalore"
    },
    {
        title: "ZenStream",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: "link"
      },
      {
        title: "ZenChat",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: "link"
      },
      {
        title: "Tech Stack ",
        description: "",
        header: <Skeleton contentDiv= {techStackDiv}/>,
        icon:  ""
      },
      {
        title: "Resume",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: "link"
      },
  ];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
