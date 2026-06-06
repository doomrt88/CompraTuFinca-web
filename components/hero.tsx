"use client"

import { SearchBar } from "@/components/search-bar"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col">
      {/* Drone video background with image poster fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        {/* Fallback image rendered under the video for instant paint */}
        <img
          src="/hero-finca.png"
          alt="Vista aérea de una finca cafetera en Colombia"
          className="absolute inset-0 size-full object-cover"
        />
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-finca.png"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6 lg:px-8">
        <span className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
          Fincas premium en Colombia
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Encuentra la finca de tus sueños en Colombia
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          Explora las mejores propiedades rurales del país con videos
          profesionales en dron. Compra con confianza, vive el campo a otro
          nivel.
        </p>

        <div className="mt-10 w-full max-w-5xl">
          <SearchBar />
        </div>
      </div>

      <a
        href="#propiedades"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
        aria-label="Ver propiedades"
      >
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
