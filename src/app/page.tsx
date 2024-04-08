"use client"
import { TextGenerateEffectDemo } from "@/components/ui/text-generate-effect";
import { LampDemo } from "@/components/ui/lamp";
import { BentoGridDemo } from "@/components/ui/bento-grid";
import { SparklesPreview } from "@/components/ui/sparkles"; 
import { SpotlightPreview } from "@/components/ui/spotlight";

export default function Home() {

  const heroText = (
    <div>
      Hi <br/> 
      <TextGenerateEffectDemo/>
    </div>
  )

  return (
    <>
    <LampDemo children={heroText}/>
    <div className="flex-col">
      <SparklesPreview children="Work-Ex / Projects"/>
      <BentoGridDemo/>
    </div>
    <br/>
    <br/>
    <SpotlightPreview/>

    </>
  )
}
