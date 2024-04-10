"use client"
import { LampHomePage } from "@/components/ui/lamp";
import { SpotlightPreview } from "@/components/ui/spotlight";
import { FloatingNavMenu } from "@/components/ui/floating-navbar";
import { NavbarMenu } from "@/components/ui/navbar-menu";
import { LampPage2 } from "@/components/ui/lampPage2";
import { LampPage3 } from "@/components/ui/lampPage3";

export default function Home() {
  return (
    <>
      
      <LampHomePage/>
      <LampPage2/>
      <LampPage3/>
      <SpotlightPreview/>
    </>
  )
}
