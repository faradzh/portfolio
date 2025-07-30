"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.animationDelay = "0.2s";
          target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <>
      <VideoBackground />
      <div className="container">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
