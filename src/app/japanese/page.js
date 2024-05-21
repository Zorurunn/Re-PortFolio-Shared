"use client";
import { Container } from "@/components/Container";
import { useState } from "react";
import { Hamburger } from "./_component/_navbar/Hamburger";
import { NavBar } from "./_component/_navbar/Navbar";
import { Header } from "./_component/Header";
import { AboutMe } from "./_component/AboutMe";
import { Skills } from "./_component/_skill/Skills";
import { Work } from "./_component/_work/Work";
import { Contact } from "./_component/Contact";
import { usePathname } from "next/navigation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  return (
    <div className={darkMode ? "dark" : undefined}>
      <div className="dark:bg-black">
        <Container bg={"bg-gray"} padding={"!pt-[0px] !pb-[0px]"}>
          <Hamburger set={setDarkMode} dark={darkMode} pathname={pathname} />
          <NavBar set={setDarkMode} dark={darkMode} />
        </Container>

        <Container bg={"bg-gray"}>
          <Header dark={darkMode} />
        </Container>

        <Container bg={"bg-gray-50 dark:bg-[#111827]"}>
          <AboutMe dark={darkMode} />
        </Container>

        <Container bg={"bg-gray"}>
          <Skills dark={darkMode} />
        </Container>

        <Container bg={"bg-gray-50 dark:bg-[#111827]"}>
          <Work dark={darkMode} />
        </Container>

        <Container bg={"bg-gray"}>
          <Contact dark={darkMode} />
        </Container>
      </div>
    </div>
  );
}
