"use client"
import { NavBar } from "@/components/Navbar"
import { Header } from "@/components/Header"
import { AboutMe } from "@/components/AboutMe"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Work } from "@/components/Work"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Container } from "@/components/Container"
import { Hamburger } from "@/components/Hamburger"
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : undefined}>
      <div className="dark:bg-black">
        <Container bg={'bg-gray'} padding={'!pt-[0px] !pb-[0px]'}>
          <Hamburger set={setDarkMode} dark={darkMode} />
          <NavBar set={setDarkMode} />
        </Container>

        <Container bg={'bg-gray'}>
          <Header dark={darkMode} />
        </Container>

        <Container bg={'bg-gray-50 dark:bg-[#111827]'}>
          <AboutMe dark={darkMode} />
        </Container>

        <Container bg={'bg-gray'}>
          <Skills dark={darkMode} />
        </Container>

        <Container bg={'bg-gray-50 dark:bg-[#111827]'}>
          <Experience dark={darkMode} />
        </Container>

        <Container bg={'bg-gray'}>
          <Work dark={darkMode} />
        </Container>

        <Container bg={'bg-gray'}>
          <Contact dark={darkMode} />
        </Container>

        <Footer dark={darkMode} bg={'bg-gray-50 dark:bg-[#111827]'} maxWidth={'max-w-[1100px]'}></Footer>
      </div>
    </div>
  )
}