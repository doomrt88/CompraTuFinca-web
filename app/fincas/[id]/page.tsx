import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { featuredProperties } from "@/lib/data"
import {
  ArrowLeft,
  BedDouble,
  CheckCircle2,
  MapPin,
  Maximize,
  MessageCircle,
  PlayCircle,
  Video,
} from "lucide-react"

type FarmDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function FarmDetailPage({ params }: FarmDetailPageProps) {
  const { id } = await params

  const property = featuredProperties.find((item) => item.id === Number(id))

  if (!property) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en recibir más información sobre ${property.title}.`,
  )

  const galleryImages = [
    property.image,
    "/hero-finca.png",
    "/region-antioquia.png",
    "/region-eje-cafetero.png",
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary pt-28 pb-8 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            nativeButton={false}
            render={
              <Link href="/fincas" className="mb-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                <ArrowLeft className="size-4" />
                Volver a fincas
              </Link>
            }
            className="px-0 text-primary-foreground hover:bg-transparent"
          />

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <Badge className="bg-white text-primary hover:bg-white">
                {property.type}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                {property.title}
              </h1>
              <p className="mt-4 inline-flex items-center gap-2 text-lg text-primary-foreground/85">
                <MapPin className="size-5" />
                {property.location}
              </p>
            </div>

            <Card className="border-white/15 bg-white/10 p-5 text-primary-foreground backdrop-blur">
              <p className="text-sm text-primary-foreground/70">Precio</p>
              <p className="mt-1 font-serif text-3xl font-bold">
                {property.price}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-primary-foreground/60">Extensión</p>
                  <p className="font-semibold">{property.area}</p>
                </div>
                <div>
                  <p className="text-primary-foreground/60">Habitaciones</p>
                  <p className="font-semibold">
                    {property.bedrooms > 0 ? property.bedrooms : "No aplica"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
          <div className="space-y-8">
            <Card className="overflow-hidden border-border p-0">
              <div className="relative aspect-video bg-black">
                <video
                  className="size-full object-cover"
                  controls
                  poster={property.image}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
                  <Video className="size-4" />
                  Recorrido aéreo con dron
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Galería de la finca
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted"
                  >
                    <img
                      src={image}
                      alt={`${property.title} imagen ${index + 1}`}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-border p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Descripción
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Esta propiedad rural combina ubicación estratégica, amplias zonas verdes
                y un entorno ideal para inversión, descanso o desarrollo productivo.
                Su recorrido aéreo permite apreciar la extensión del terreno, accesos,
                paisaje y distribución general antes de programar una visita presencial.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                En CompraTuFinca.com te ayudamos a conocer mejor cada propiedad
                mediante fotografías, videos con dron y acompañamiento comercial para
                que tomes una decisión con mayor confianza.
              </p>
            </Card>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card className="border-border p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Información principal
              </h2>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Maximize className="size-5" />
                  </span>
                  <div>
                    <p className="text-muted-foreground">Extensión</p>
                    <p className="font-semibold text-foreground">{property.area}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BedDouble className="size-5" />
                  </span>
                  <div>
                    <p className="text-muted-foreground">Habitaciones</p>
                    <p className="font-semibold text-foreground">
                      {property.bedrooms > 0 ? `${property.bedrooms} habitaciones` : "No aplica"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <PlayCircle className="size-5" />
                  </span>
                  <div>
                    <p className="text-muted-foreground">Video</p>
                    <p className="font-semibold text-foreground">Recorrido con dron</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-border bg-muted/40 p-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                ¿Te interesa esta finca?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Escríbenos por WhatsApp para recibir más información o agendar una visita.
              </p>

              <Button
                size="lg"
                className="mt-5 w-full gap-2"
                nativeButton={false}
                render={
                  <a
                    href={`https://wa.me/573001234567?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-5" />
                    Contactar por WhatsApp
                  </a>
                }
              />
            </Card>

            <Card className="border-border p-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Ventajas
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Recorrido visual con video de dron.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Información clara de ubicación, precio y extensión.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Contacto directo para resolver dudas y coordinar visita.
                </li>
              </ul>
            </Card>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}