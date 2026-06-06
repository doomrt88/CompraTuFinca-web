import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

const WHATSAPP_NUMBER = "573001234567"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, estoy interesado en una finca publicada en CompraTuFinca.com",
)
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function WhatsappContact() {
  return (
    <section id="contacto" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="flex mx-auto size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <MessageCircle className="size-8" />
        </span>
        <h2 className="mt-6 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
          ¿Tienes preguntas? Escríbenos por WhatsApp
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Nuestros asesores están listos para ayudarte a encontrar o vender tu
          finca. Respuesta inmediata, sin compromiso.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            nativeButton={false}
            render={
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Chatear por WhatsApp
              </a>
            }
            size="lg"
            className="gap-2 bg-primary"
          />
          <Button
            nativeButton={false}
            render={
              <a href="tel:+573001234567">
                <Phone className="size-5" />
                +57 300 123 4567
              </a>
            }
            size="lg"
            variant="outline"
            className="gap-2"
          />
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" />
      </a>
    </section>
  )
}
