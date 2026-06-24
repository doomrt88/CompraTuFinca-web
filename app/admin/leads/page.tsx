import Link from "next/link"
import {
  ArrowLeft,
  Building2,
  Eye,
  Pencil,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const sellerLeads = [
  {
    id: 1,
    date: "12/06/2026",
    name: "Juan Pérez",
    phone: "300 123 4567",
    email: "juan@example.com",
    propertyType: "Ganadera",
    location: "Puerto Berrío, Antioquia",
    area: "120 hectáreas",
    status: "Nuevo",
  },
  {
    id: 2,
    date: "11/06/2026",
    name: "Ana Gómez",
    phone: "310 456 7890",
    email: "ana@example.com",
    propertyType: "Cafetera",
    location: "Quimbaya, Quindío",
    area: "18 hectáreas",
    status: "Contactado",
  },
  {
    id: 3,
    date: "10/06/2026",
    name: "Carlos Ramírez",
    phone: "315 222 3344",
    email: "carlos@example.com",
    propertyType: "Recreativa",
    location: "La Ceja, Antioquia",
    area: "4 hectáreas",
    status: "Negociando",
  },
]

export default function AdminLeadsPage() {
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
              Solicitudes de Venta
            </h1>

            <p className="mt-2 text-primary-foreground/80">
              Gestiona propietarios interesados en publicar sus fincas.
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
                  <th className="px-4 py-3 text-left text-sm">Propietario</th>
                  <th className="px-4 py-3 text-left text-sm">Tipo</th>
                  <th className="px-4 py-3 text-left text-sm">Ubicación</th>
                  <th className="px-4 py-3 text-left text-sm">Extensión</th>
                  <th className="px-4 py-3 text-left text-sm">Estado</th>
                  <th className="px-4 py-3 text-left text-sm">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {sellerLeads.map((lead) => (
                  <tr key={lead.id} className="border-t border-border">
                    <td className="px-4 py-4">{lead.date}</td>

                    <td className="px-4 py-4">
                      <p className="font-medium text-foreground">{lead.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {lead.email}
                      </p>
                    </td>

                    <td className="px-4 py-4">{lead.propertyType}</td>

                    <td className="px-4 py-4">{lead.location}</td>

                    <td className="px-4 py-4">{lead.area}</td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {lead.status}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                        <Button size="icon" variant="outline" title="Ver solicitud">
                        <Eye className="size-4" />
                        </Button>

                        <Button size="icon" variant="outline" title="Gestionar estado">
                        <Pencil className="size-4" />
                        </Button>

                        <Button size="icon" variant="outline" title="Convertir a finca">
                        <Building2 className="size-4" />
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