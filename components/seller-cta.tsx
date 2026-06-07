import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const points = [
  "Video profesional en dron incluido",
  "Asesoría legal y comercial",
  "Miles de compradores activos cada mes",
]

export function SellerCTA() {
  return (
    <section id="vender" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 text-primary-foreground sm:p-12 lg:p-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
                ¿Tienes una finca?
              </span>
              <h2 className="mt-2 text-balance font-serif text-3xl font-bold sm:text-4xl">
                Vende tu propiedad rural más rápido
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-white/80">
                Publica tu finca en la plataforma premium de propiedades rurales
                de Colombia. La grabamos en dron y la mostramos a miles de
                compradores calificados.
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/90">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check className="size-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  nativeButton={false}
                  render={<Link href="/vender-mi-finca">Publicar mi finca</Link>}
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  nativeButton={false}
                  render={<Link href="/contacto">Conocer más</Link>}
                />
              </div>
            </div>

            <div className="relative min-h-64 lg:min-h-full">
              <img
                src="/cta-seller.png"
                alt="Operador de dron grabando una finca al atardecer"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
