"use client"
import { NavBar } from "@/components/Navbar"
import { Header } from "@/components/Header"
import { ProPic } from "@/components/ProPic"
import { AboutMe } from "@/components/AboutMe"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Work } from "@/components/Work"

export default function Home() {

  return (
    <>
      <NavBar bg={'bg-gray '}></NavBar>
      <Header bg={'bg-gray '} />
      <AboutMe bg={'bg-gray-50 '}></AboutMe>
      <Skills bg={'bg-gray '}></Skills>
      <Experience bg={'bg-gray-50'}></Experience>
      <Work bg={'bg-gray'}></Work>
    </>

  )
}