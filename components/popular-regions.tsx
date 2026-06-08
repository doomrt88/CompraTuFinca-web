import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { regions } from "@/lib/data"

export function PopularRegions() {
  return (
    <section id="regiones" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Regiones populares
          </span>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Explora las mejores zonas de Colombia
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Desde las montañas cafeteras hasta los llanos ganaderos, encuentra
            tu finca en la región ideal.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {regions.map((r) => (
            <Link
              key={r.slug}
              href={`/regiones/${r.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={r.image || "/placeholder.svg"}
                alt={`Paisaje de ${r.name}`}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <div>
                  <h3 className="font-serif text-2xl font-bold">{r.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{r.properties}</p>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-white group-hover:text-primary">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/regiones"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Ver todas las regiones
          </Link>
        </div>
      </div>
    </section>
  )
}