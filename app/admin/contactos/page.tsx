import Link from "next/link"
import { ArrowLeft, Eye, MailOpen, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const contactMessages = [
  {
    id: 1,
    date: "12/06/2026",
    name: "Carlos Ruiz",
    email: "carlos@example.com",
    phone: "300 987 6543",
    type: "Quiero comprar una finca",
    message: "Estoy buscando una finca recreativa cerca de Medellín.",
    status: "Nuevo",
  },
  {
    id: 2,
    date: "11/06/2026",
    name: "Laura Díaz",
    email: "laura@example.com",
    phone: "310 222 8899",
    type: "Quiero vender mi finca",
    message: "Tengo una finca cafetera en Quindío y quiero publicarla.",
    status: "Leído",
  },
  {
    id: 3,
    date: "10/06/2026",
    name: "Andrés Gómez",
    email: "andres@example.com",
    phone: "315 555 1122",
    type: "Quiero más información",
    message: "Deseo conocer cómo funciona el proceso de publicación.",
    status: "Respondido",
  },
]

export default function AdminContactsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <section className="relative overflow-hidden bg-primary pt-8 pb-8 text-primary-foreground">
        <img
          src="/hero-finca.png"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-primary/60" />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6">
          <div>
            <Link
              href="/admin"
              className="mb-3 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ArrowLeft className="size-4" />
              Volver al panel
            </Link>

            <h1 className="font-serif text-4xl font-bold">
              Mensajes de Contacto
            </h1>

            <p className="mt-2 text-primary-foreground/80">
              Revisa los mensajes enviados desde la página de contacto.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-4 max-w-7xl px-6 pb-10">
        <Card className="overflow-hidden border-border bg-background p-0 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/5">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Fecha</th>
                  <th className="px-4 py-3 text-left text-sm">Contacto</th>
                  <th className="px-4 py-3 text-left text-sm">Tipo</th>
                  <th className="px-4 py-3 text-left text-sm">Mensaje</th>
                  <th className="px-4 py-3 text-left text-sm">Estado</th>
                  <th className="px-4 py-3 text-left text-sm">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {contactMessages.map((contact) => (
                  <tr key={contact.id} className="border-t border-border">
                    <td className="px-4 py-4">{contact.date}</td>

                    <td className="px-4 py-4">
                      <p className="font-medium text-foreground">
                        {contact.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.phone}
                      </p>
                    </td>

                    <td className="px-4 py-4">{contact.type}</td>

                    <td className="max-w-sm px-4 py-4 text-sm text-muted-foreground">
                      {contact.message}
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {contact.status}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Button size="icon" variant="outline" title="Ver mensaje">
                          <Eye className="size-4" />
                        </Button>

                        <Button size="icon" variant="outline" title="Marcar como leído">
                          <MailOpen className="size-4" />
                        </Button>

                        <Button size="icon" variant="outline" title="Gestionar mensaje">
                          <Pencil className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </main>
  )
}