import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  areaUnits,
  departments,
  propertyStatus,
  propertyTypes,
  regions,
} from "@/lib/data"

export default function NewPropertyPage() {
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
            <Link
              href="/admin/fincas"
              className="mb-3 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ArrowLeft className="size-4" />
              Volver a fincas
            </Link>

            <h1 className="font-serif text-4xl font-bold">Nueva finca</h1>

            <p className="mt-2 text-primary-foreground/80">
              Crea una nueva propiedad para publicarla en CompraTuFinca.
            </p>
          </div>

          <Button
            variant="secondary"
            nativeButton={false}
            render={<Link href="/admin">Panel</Link>}
          />
        </div>
      </section>

      <div className="mx-auto mt-4 max-w-5xl px-6 pb-10">
        <form className="space-y-8">
          <Card className="border-border bg-background p-6 shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Información principal
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Título de la finca
                </label>
                <Input className="h-11" placeholder="Ej: Finca Cafetera El Mirador" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Tipo de finca
                </label>
                <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm">
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
                  Región
                </label>
                <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm">
                  <option value="">Selecciona región</option>
                  {regions.map((region) => (
                    <option key={region.slug} value={region.slug}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Departamento
                </label>
                <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm">
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
                  Ciudad / Municipio
                </label>
                <Input className="h-11" placeholder="Ej: Quimbaya" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Precio
                </label>
                <Input className="h-11" placeholder="Ej: 1450000000" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Estado
                </label>
                <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm">
                  <option value="">Selecciona estado</option>
                  {propertyStatus.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Card>

          <Card className="border-border bg-background p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Características
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Extensión
                </label>
                <Input className="h-11" placeholder="Ej: 32" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Unidad
                </label>
                <select className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm">
                  <option value="">Selecciona unidad</option>
                  {areaUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Habitaciones
                </label>
                <Input className="h-11" placeholder="Ej: 5" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Baños
                </label>
                <Input className="h-11" placeholder="Ej: 3" />
              </div>
            </div>
          </Card>

          <Card className="border-border bg-background p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Descripción
            </h2>

            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Descripción corta
                </label>
                <Input
                  className="h-11"
                  placeholder="Ej: Finca cafetera con vista panorámica y acceso vehicular."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Descripción completa
                </label>
                <Textarea placeholder="Describe la finca, accesos, cultivos, servicios, casa principal, fuentes de agua, documentos, vías, etc." />
              </div>
            </div>
          </Card>

          <Card className="border-border bg-background p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Multimedia y documentos
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  URL imagen principal
                </label>
                <Input className="h-11" placeholder="/property-cafetera.png" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  URL video dron
                </label>
                <Input className="h-11" placeholder="https://..." />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  URL documento PDF
                </label>
                <Input className="h-11" placeholder="/documents/documento-prueba-finca.pdf" />
              </div>
            </div>
          </Card>

          <Card className="border-border bg-background p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Información del propietario
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Nombre
                </label>
                <Input className="h-11" placeholder="Nombre del propietario" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Teléfono / WhatsApp
                </label>
                <Input className="h-11" placeholder="300 123 4567" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Correo
                </label>
                <Input className="h-11" type="email" placeholder="correo@ejemplo.com" />
              </div>
            </div>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/admin/fincas">Cancelar</Link>}
            />

            <Button className="gap-2">
              <Save className="size-4" />
              Guardar finca
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}