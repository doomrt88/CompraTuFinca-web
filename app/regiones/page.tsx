import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { regions } from "@/lib/data"
import { ArrowRight, MapPin } from "lucide-react"

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary pt-32 pb-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Regiones
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Explora fincas por región en Colombia
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Encuentra propiedades rurales según la zona que más se ajuste a tu estilo de vida, inversión o actividad productiva.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Card
                key={region.slug}
                className="group overflow-hidden border-border p-0 pt-0 transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium text-white/80">
                      {region.properties}
                    </p>
                    <h2 className="font-serif text-2xl font-bold">
                      {region.name}
                    </h2>
                  </div>
                </div>

                <div className="p-5">
                  <p className="flex items-center gap-2 text-sm font-medium text-primary">
                    <MapPin className="size-4" />
                    {region.departments}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {region.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {region.popularTypes.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="mt-5 w-full gap-2"
                    variant="secondary"
                    nativeButton={false}
                    render={
                      <Link href={`/regiones/${region.slug}`}>
                        Ver fincas
                        <ArrowRight className="size-4" />
                      </Link>
                    }
                  />
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