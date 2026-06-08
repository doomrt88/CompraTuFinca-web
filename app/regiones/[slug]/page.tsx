import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { featuredProperties, regions } from "@/lib/data"
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  MapPin,
  Maximize,
  Video,
} from "lucide-react"

type RegionDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function RegionDetailPage({ params }: RegionDetailPageProps) {
  const { slug } = await params
  const region = regions.find((item) => item.slug === slug)

  if (!region) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden bg-primary pt-32 pb-20 text-primary-foreground">
        <img
          src={region.image}
          alt={region.name}
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            nativeButton={false}
            render={
              <Link
                href="/regiones"
                className="mb-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <ArrowLeft className="size-4" />
                Volver a regiones
              </Link>
            }
            className="px-0 text-primary-foreground hover:bg-transparent"
          />

          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Fincas en venta en {region.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            {region.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {region.popularTypes.map((type) => (
              <Badge key={type} className="bg-white text-primary hover:bg-white">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <Card className="border-border p-5">
            <p className="text-sm text-muted-foreground">Departamentos</p>
            <p className="mt-1 font-semibold text-foreground">
              {region.departments}
            </p>
          </Card>

          <Card className="border-border p-5">
            <p className="text-sm text-muted-foreground">Disponibilidad</p>
            <p className="mt-1 font-semibold text-foreground">
              {region.properties}
            </p>
          </Card>

          <Card className="border-border p-5">
            <p className="text-sm text-muted-foreground">Tipos populares</p>
            <p className="mt-1 font-semibold text-foreground">
              {region.popularTypes.join(", ")}
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Propiedades
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
                Fincas destacadas en {region.name}
              </h2>
            </div>

            <Button
              variant="outline"
              className="gap-2"
              nativeButton={false}
              render={
                <Link href="/fincas">
                  Ver todas las fincas
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.slice(0, 3).map((property) => (
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

                    <Link href={`/fincas/${property.id}`}>
                      <Button size="sm" variant="secondary">
                        Ver finca
                      </Button>
                    </Link>
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