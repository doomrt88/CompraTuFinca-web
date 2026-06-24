import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { featuredProperties } from "@/lib/data"
import {
  BadgeCheck,
  Eye,
  FileText,
  PauseCircle,
  Pencil,
  Plus,
} from "lucide-react"

const mockStatuses = ["Publicada", "Borrador", "Publicada", "Pausada", "Vendida", "Publicada"]

export default function AdminPropertiesPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <section className="relative overflow-hidden bg-primary pt-8 pb-8 text-primary-foreground">
        <img
          src="/hero-finca.png"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-primary/5" />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6">
          <div>
            <h1 className="font-serif text-4xl font-bold">
              Administración de Fincas
            </h1>

            <p className="mt-2 text-primary-foreground/80">
              Gestiona todas las propiedades publicadas en CompraTuFinca.
            </p>
          </div>

          <Button
            variant="secondary"
            nativeButton={false}
            render={
              <Link href="/admin/fincas/nueva">
                <Plus className="size-4" />
                Nueva finca
              </Link>
            }
          />
        </div>
      </section>

      <div className="mx-auto mt-4 max-w-7xl px-6 pb-10">
        <Card className="overflow-hidden border-border bg-background p-0 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/5">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">ID</th>
                  <th className="px-4 py-3 text-left text-sm">Nombre</th>
                  <th className="px-4 py-3 text-left text-sm">Tipo</th>
                  <th className="px-4 py-3 text-left text-sm">Ubicación</th>
                  <th className="px-4 py-3 text-left text-sm">Precio</th>
                  <th className="px-4 py-3 text-left text-sm">Estado</th>
                  <th className="px-4 py-3 text-left text-sm">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {featuredProperties.map((property, index) => {
                  const status = mockStatuses[index] ?? "Publicada"

                  return (
                    <tr key={property.id} className="border-t border-border">
                      <td className="px-4 py-4">{property.id}</td>

                      <td className="px-4 py-4 font-medium">
                        {property.title}
                      </td>

                      <td className="px-4 py-4">{property.type}</td>

                      <td className="px-4 py-4">{property.location}</td>

                      <td className="px-4 py-4">{property.price}</td>

                      <td className="px-4 py-4">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {status}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            title="Ver publicación pública"
                            nativeButton={false}
                            render={
                              <Link href={`/fincas/${property.id}`}>
                                <Eye className="size-4" />
                              </Link>
                            }
                          />

                          <Button
                            size="icon"
                            variant="outline"
                            title="Editar finca"
                            nativeButton={false}
                            render={
                              <Link href={`/admin/fincas/${property.id}/editar`}>
                                <Pencil className="size-4" />
                              </Link>
                            }
                          />

                          <Button
                            size="icon"
                            variant="outline"
                            title="Pausar o publicar"
                          >
                            <PauseCircle className="size-4" />
                          </Button>

                          <Button
                            size="icon"
                            variant="outline"
                            title="Marcar como vendida"
                          >
                            <BadgeCheck className="size-4" />
                          </Button>

                          <Button
                            size="icon"
                            variant="outline"
                            title="Administrar documentos"
                          >
                            <FileText className="size-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </main>
  )
}