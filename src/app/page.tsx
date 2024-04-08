"use client"
import { TextGenerateEffectDemo } from "@/components/ui/text-generate-effect";
import { LampDemo } from "@/components/ui/lamp";
import { BentoGridDemo } from "@/components/ui/bento-grid";
import { SparklesPreview } from "@/components/ui/sparkles"; 
import { SpotlightPreview } from "@/components/ui/spotlight";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("Work-Ex / Projects");
  return (
    <>
    <LampDemo/>
    <div className="flex-col">
      <SparklesPreview value={value}/>
      <BentoGridDemo/>
    </div>
    <br/>
    <br/>
    <SpotlightPreview/>

    </>
  )
}
