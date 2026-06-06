"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Regiones", href: "#regiones" },
  { label: "Vender", href: "#vender" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className={cn(
            "flex items-center gap-2 font-serif text-xl font-bold tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-white",
          )}
        >
          <span
            className={cn(
              "flex size-9 items-center justify-center rounded-md transition-colors",
              scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur",
            )}
          >
            <Leaf className="size-5" />
          </span>
          CompraTuFinca
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:opacity-70",
                scrolled ? "text-foreground" : "text-white/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<a href="#vender">Publicar finca</a>}
            className={cn(
              !scrolled && "bg-white text-primary hover:bg-white/90",
            )}
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-md md:hidden",
            scrolled ? "text-foreground" : "text-white",
          )}
          aria-label="Abrir menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              render={
                <a href="#vender" onClick={() => setOpen(false)}>
                  Publicar finca
                </a>
              }
              className="mt-2"
            />
          </nav>
        </div>
      )}
    </header>
  )
}
