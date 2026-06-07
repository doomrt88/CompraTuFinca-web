import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Maximize, BedDouble, Video, ArrowRight } from "lucide-react"
import { featuredProperties } from "@/lib/data"
import Link from "next/link"

export function FeaturedProperties() {
  return (
    <section id="propiedades" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div className="max-w-2xl text-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Propiedades destacadas
            </span>
            <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Fincas seleccionadas para ti
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Una selección de las propiedades rurales más exclusivas de
              Colombia, cada una con su recorrido profesional en dron.
            </p>
          </div>
          <Button
              variant="outline"
              className="gap-2 whitespace-nowrap"
              nativeButton={false}
              render={
                <Link href="/fincas">
                  Ver todas
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((p) => (
            <Card
              key={p.id}
              className="group overflow-hidden border-border p-0 pt-0 transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                  <Badge className="bg-primary text-primary-foreground">
                    {p.type}
                  </Badge>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    <Video className="size-3.5" />
                    Video dron
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    {p.location}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="size-4 text-primary" />
                    {p.area}
                  </span>
                  {p.bedrooms > 0 && (
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="size-4 text-primary" />
                      {p.bedrooms} hab.
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Precio</p>
                    <p className="font-serif text-xl font-bold text-primary">
                      {p.price}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    nativeButton={false}
                    render={<Link href={`/fincas/${p.id}`}>Ver finca</Link>}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
