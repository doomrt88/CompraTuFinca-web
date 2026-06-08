import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react"

import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa"

const contactItems = [
  {
    label: "WhatsApp",
    value: "+57 300 123 4567",
    icon: MessageCircle,
  },
  {
    label: "Correo",
    value: "contacto@compratufinca.com",
    icon: Mail,
  },
  {
    label: "Ubicación",
    value: "Colombia",
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary pt-32 pb-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Contacto
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Hablemos sobre la finca que quieres comprar o vender
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Escríbenos para resolver dudas, conocer propiedades disponibles o iniciar el proceso de publicación de tu finca.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="space-y-6">
            <Card className="border-border p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Información de contacto
              </h2>

              <div className="mt-6 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Button
                size="lg"
                className="mt-6 w-full gap-2"
                nativeButton={false}
                render={
                  <a
                    href="https://wa.me/573001234567?text=Hola,%20quiero%20más%20información%20sobre%20CompraTuFinca.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-5" />
                    Escribir por WhatsApp
                  </a>
                }
              />
            </Card>

            <Card className="border-border bg-muted/40 p-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Síguenos
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Próximamente publicaremos fincas destacadas, recorridos con dron y oportunidades rurales.
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href="#"
                  className="flex size-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <FaInstagram className="size-5" />
                </a>
                <a
                  href="#"
                  className="flex size-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <FaFacebook className="size-5" />
                </a>
                <a
                  href="tel:+573001234567"
                  className="flex size-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Teléfono"
                >
                  <Phone className="size-5" />
                </a>
              </div>
            </Card>
          </div>

          <Card className="border-border p-6 sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Escríbenos
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
              Envíanos un mensaje
            </h2>
            <p className="mt-3 text-muted-foreground">
              Completa el formulario y nuestro equipo se comunicará contigo.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input className="h-11" placeholder="Ej: Ana Gómez" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    WhatsApp
                  </label>
                  <Input className="h-11" placeholder="Ej: 300 123 4567" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Correo electrónico
                </label>
                <Input className="h-11" type="email" placeholder="Ej: correo@ejemplo.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Tipo de consulta
                </label>
                <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                  <option value="">Selecciona una opción</option>
                  <option value="comprar">Quiero comprar una finca</option>
                  <option value="vender">Quiero vender mi finca</option>
                  <option value="informacion">Quiero más información</option>
                  <option value="alianza">Quiero proponer una alianza</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <Textarea placeholder="Cuéntanos cómo podemos ayudarte." />
              </div>

              <Button size="lg" className="w-full gap-2">
                <Send className="size-5" />
                Enviar mensaje
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}