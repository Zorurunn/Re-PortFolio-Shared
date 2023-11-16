"use client"
import { SearchSVG } from "@/assets/svgs/SearchSVG"
import { NavBar } from "@/components/Navbar"
import { Header } from "@/components/Header"
import { ProPic } from "@/components/ProPic"

export default function Home() {

  return (
    <div className="w-screen max-w-6xl m-auto">
      <NavBar></NavBar>
      <Header />
    </div>
  )
}