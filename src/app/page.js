"use client"
import { NavBar } from "@/components/Navbar"
import { Header } from "@/components/Header"
import { ProPic } from "@/components/ProPic"
import { AboutMe } from "@/components/AboutMe"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Work } from "@/components/Work"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Container } from "@/components/Container"

export default function Home() {

  return (
    <>
      <Container bg={'bg-gray'}>
        <NavBar />
      </Container>

      <Container bg={'bg-gray'}>
        <Header />
      </Container>

      <Container bg={'bg-gray-50'}>
        <AboutMe />
      </Container>

      <Container bg={'bg-gray'}>
        <Skills />
      </Container>

      <Container bg={'bg-gray-50'}>
        <Experience />
      </Container>

      <Container bg={'bg-gray'}>
        <Work />
      </Container>

      <Container bg={'bg-gray'}>
        <Contact />
      </Container>

      <Footer bg={'bg-gray-50'} maxWidth={'max-w-[1100px]'}></Footer>
    </>
  )
}