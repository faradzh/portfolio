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

    // Enhanced parallax effect for video
    let ticking = false;

    function updateBackground() {
      const scrolled = window.pageYOffset;
      const video =
        document.querySelector<HTMLVideoElement>(".video-background");

      if (video) {
        video.style.transform = `translateY(${scrolled * 0.5}px) scale(${
          1.1 + scrolled * 0.0001
        })`;
      }

      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateBackground);
        ticking = true;
      }
    });

    // Dynamic background color change on scroll
    // window.addEventListener("scroll", () => {
    //   const scrollPercent =
    //     window.pageYOffset /
    //     (document.documentElement.scrollHeight - window.innerHeight);
    //   console.log("Scroll Percent:", scrollPercent);
    //   const baseHue = 220; // Professional blue base
    //   const hue = baseHue + scrollPercent * 10; // Subtle color shift
    //   const saturation = 25 + scrollPercent * 15; // Low saturation for professionalism
    //   const lightness = 12 + scrollPercent * 1; // Dark theme
    //   document.body.style.background = `linear-gradient(135deg,
    //             hsl(${hue}, ${saturation}%, ${lightness}%) 0%,
    //             hsl(${hue + 10}, ${saturation + 5}%, ${lightness + 5}%) 25%,
    //             hsl(${hue + 20}, ${saturation + 10}%, ${lightness + 10}%) 50%,
    //             hsl(${hue + 30}, ${saturation + 15}%, ${lightness + 15}%) 75%,
    //             hsl(${hue + 40}, ${saturation + 20}%, ${
    //     lightness + 20
    //   }%) 100%)`;
    // });
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
