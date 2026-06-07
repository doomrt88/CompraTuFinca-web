import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { departments, propertyTypes } from "@/lib/data"
import { CheckCircle2, ClipboardList, Drone, MessageCircle, PhoneCall } from "lucide-react"

export default function SellFarmPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary pt-32 pb-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
              Vende tu finca
            </span>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Publica tu finca con videos profesionales y compradores interesados
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Déjanos tus datos y la información básica de tu propiedad. Nuestro equipo se comunicará contigo para evaluar la finca, explicar el proceso y negociar la publicación.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <ClipboardList className="size-6" />
                <p className="mt-3 text-sm font-semibold">1. Registras tus datos</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <PhoneCall className="size-6" />
                <p className="mt-3 text-sm font-semibold">2. Te contactamos</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <Drone className="size-6" />
                <p className="mt-3 text-sm font-semibold">3. Publicamos con video</p>
              </div>
            </div>
          </div>

          <Card className="border-white/15 bg-white/10 p-6 text-primary-foreground backdrop-blur">
            <h2 className="font-serif text-2xl font-bold">¿Qué incluye el servicio?</h2>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/85">
              <li className="flex gap-3">
                <CheckCircle2 className="size-5 shrink-0" />
                Captura inicial de información de la propiedad.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="size-5 shrink-0" />
                Contacto directo para validar condiciones de publicación.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="size-5 shrink-0" />
                Posibilidad de video aéreo con dron y promoción visual.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="size-5 shrink-0" />
                Publicación orientada a compradores de fincas en Colombia.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <Card className="border-border p-6 sm:p-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Formulario
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
                Cuéntanos sobre tu finca
              </h2>
              <p className="mt-3 text-muted-foreground">
                Esta información nos ayuda a contactarte y evaluar si la propiedad aplica para ser publicada en CompraTuFinca.com.
              </p>
            </div>

            <form className="mt-8 space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Datos de contacto
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Nombre completo
                    </label>
                    <Input className="h-11" placeholder="Ej: Carlos Ramírez" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      WhatsApp
                    </label>
                    <Input className="h-11" placeholder="Ej: 300 123 4567" />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Correo electrónico
                    </label>
                    <Input className="h-11" type="email" placeholder="Ej: correo@ejemplo.com" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Datos básicos de la finca
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Departamento
                    </label>
                    <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                      <option value="">Selecciona departamento</option>
                      {departments.map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ciudad o municipio
                    </label>
                    <Input className="h-11" placeholder="Ej: Pereira" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Tipo de finca
                    </label>
                    <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                      <option value="">Selecciona tipo</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Extensión aproximada
                    </label>
                    <Input className="h-11" placeholder="Ej: 12 hectáreas, 3 cuadras, 5000 m²" />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Valor esperado de venta
                    </label>
                    <Input className="h-11" placeholder="Ej: $850.000.000 COP" />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Comentarios adicionales
                    </label>
                    <Textarea placeholder="Cuéntanos si tiene casa, cultivos, acceso por carretera, agua, escrituras, servicios, etc." />
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full gap-2">
                <MessageCircle className="size-5" />
                Enviar solicitud
              </Button>
            </form>
          </Card>

          <aside className="space-y-6">
            <Card className="border-border bg-muted/40 p-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                ¿Qué pasa después?
              </h3>
              <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                <p>
                  Revisamos la información enviada y nos comunicamos contigo por WhatsApp o llamada.
                </p>
                <p>
                  Si la finca cumple con el perfil de la plataforma, coordinamos los detalles para crear una publicación atractiva.
                </p>
                <p>
                  En esta primera versión, todas las publicaciones son gestionadas por nuestro equipo para mantener calidad y confianza.
                </p>
              </div>
            </Card>

            <Card className="border-border p-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Modelo futuro
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Más adelante podremos habilitar cuentas para propietarios, planes de afiliación y publicación directa de fincas.
              </p>
            </Card>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}