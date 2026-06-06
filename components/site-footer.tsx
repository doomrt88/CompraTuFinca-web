import { Leaf } from "lucide-react"
import { propertyTypes } from "@/lib/data"

const columns = [
  {
    title: "Tipos de finca",
    links: propertyTypes.slice(0, 6),
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Cómo funciona", "Blog", "Trabaja con nosotros", "Prensa"],
  },
  {
    title: "Soporte",
    links: ["Contacto", "Preguntas frecuentes", "Publicar finca", "Términos", "Privacidad"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 font-serif text-xl font-bold">
              <span className="flex size-9 items-center justify-center rounded-md bg-white/15">
                <Leaf className="size-5" />
              </span>
              CompraTuFinca
            </a>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-white/70">
              La plataforma premium para comprar y vender fincas y propiedades
              rurales en Colombia, con videos profesionales en dron.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} CompraTuFinca.com. Todos los derechos reservados.</p>
          <p>Hecho con cariño para el campo colombiano</p>
        </div>
      </div>
    </footer>
  )
}
