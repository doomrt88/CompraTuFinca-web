import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  areaRanges,
  cities,
  departments,
  featuredProperties,
  priceRanges,
  propertyTypes,
} from "@/lib/data"
import { BedDouble, MapPin, Maximize, Search, SlidersHorizontal, Video } from "lucide-react"

export default function FarmsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary pt-32 pb-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Fincas en venta
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Encuentra fincas en Colombia con recorridos aéreos en video
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Filtra por tipo de finca, ubicación, precio y extensión para encontrar la propiedad rural ideal.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <SlidersHorizontal className="size-5 text-primary" />
              <h2 className="font-serif text-xl font-bold text-foreground">
                Buscar finca
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
              <select className="h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Tipo de finca</option>
                {propertyTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>

              <select className="h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Departamento</option>
                {departments.map((department) => (
                  <option key={department}>{department}</option>
                ))}
              </select>

              <select className="h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Ciudad</option>
                {cities.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>

              <select className="h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Precio</option>
                {priceRanges.map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>

              <select className="h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Extensión</option>
                {areaRanges.map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex justify-end">
              <Button className="gap-2">
                <Search className="size-4" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Resultados
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
                Fincas disponibles
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {featuredProperties.length} propiedades encontradas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <Card
                key={property.id}
                className="group overflow-hidden border-border p-0 pt-0 transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                    <Badge className="bg-primary text-primary-foreground">
                      {property.type}
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
                      {property.title}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-4 shrink-0 text-primary" />
                      {property.location}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Maximize className="size-4 text-primary" />
                      {property.area}
                    </span>
                    {property.bedrooms > 0 && (
                      <span className="inline-flex items-center gap-1.5">
                        <BedDouble className="size-4 text-primary" />
                        {property.bedrooms} hab.
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Precio</p>
                      <p className="font-serif text-xl font-bold text-primary">
                        {property.price}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      nativeButton={false}
                      render={<Link href={`/fincas/${property.id}`}>Ver finca</Link>}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}