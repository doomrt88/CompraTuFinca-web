"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
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
  type Property,
} from "@/lib/data"

import { ImageUploader } from "@/components/admin/ImageUploader"
import { DocumentUploader } from "@/components/admin/DocumentUploader"
import { VideoUploader } from "@/components/admin/VideoUploader"

type PropertyFormMode = "create" | "edit"

type PropertyFormValues = {
  title: string
  propertyType: string
  region: string
  department: string
  city: string
  price: string
  status: string
  extensionValue: string
  extensionUnit: string
  bedrooms: string
  bathrooms: string
  shortDescription: string
  fullDescription: string
  mainImageUrl: string
  droneVideoUrl: string
  documentUrl: string
  ownerName: string
  ownerPhone: string
  ownerEmail: string
}

type PropertyFormProps = {
  mode: PropertyFormMode
  property?: Property
}

const emptyValues: PropertyFormValues = {
  title: "",
  propertyType: "",
  region: "",
  department: "",
  city: "",
  price: "",
  status: "",
  extensionValue: "",
  extensionUnit: "",
  bedrooms: "",
  bathrooms: "",
  shortDescription: "",
  fullDescription: "",
  mainImageUrl: "",
  droneVideoUrl: "",
  documentUrl: "",
  ownerName: "",
  ownerPhone: "",
  ownerEmail: "",
}

function getInitialValues(property?: Property): PropertyFormValues {
  if (!property) {
    return emptyValues
  }

  return {
    title: property.title,
    propertyType: property.type,
    region: "",
    department: "",
    city: property.location,
    price: property.price,
    status: property.featured ? "Activa" : "Pendiente",
    extensionValue: property.area,
    extensionUnit: "Hectáreas",
    bedrooms: property.bedrooms > 0 ? String(property.bedrooms) : "",
    bathrooms: "",
    shortDescription: `${property.title} ubicada en ${property.location}.`,
    fullDescription:
      "Propiedad rural con excelente potencial para inversión, descanso o actividad productiva. Información pendiente de completar por el equipo administrador.",
    mainImageUrl: property.image,
    droneVideoUrl: "/hero-video.mp4",
    documentUrl: "/documents/documento-prueba-finca.pdf",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
  }
}

export function PropertyForm({ mode, property }: PropertyFormProps) {
  const initialValues = useMemo(() => getInitialValues(property), [property])
  const [values, setValues] = useState<PropertyFormValues>(initialValues)

  const isEditMode = mode === "edit"

  const pageTitle = isEditMode ? "Editar finca" : "Nueva finca"
  const pageDescription = isEditMode
    ? "Actualiza la información de esta propiedad publicada en CompraTuFinca."
    : "Crea una nueva propiedad para publicarla en CompraTuFinca."
  const submitLabel = isEditMode ? "Guardar cambios" : "Guardar finca"

  function updateField(field: keyof PropertyFormValues, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: Conectar con Spring Boot.
    // create: POST /api/admin/properties
    // edit: PUT /api/admin/properties/{id}
    console.log("Property form values", values)
  }

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

            <h1 className="font-serif text-4xl font-bold">{pageTitle}</h1>

            <p className="mt-2 text-primary-foreground/80">{pageDescription}</p>
          </div>

          <Button
            variant="secondary"
            nativeButton={false}
            render={<Link href="/admin">Panel</Link>}
          />
        </div>
      </section>

      <div className="mx-auto mt-4 max-w-5xl px-6 pb-10">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <Card className="border-border bg-background p-6 shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Información principal
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Título de la finca
                </label>
                <Input
                  className="h-11"
                  placeholder="Ej: Finca Cafetera El Mirador"
                  value={values.title}
                  onChange={(event) => updateField("title", event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Tipo de finca
                </label>
                <select
                  className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
                  value={values.propertyType}
                  onChange={(event) =>
                    updateField("propertyType", event.target.value)
                  }
                >
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
                <select
                  className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
                  value={values.region}
                  onChange={(event) => updateField("region", event.target.value)}
                >
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
                <select
                  className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
                  value={values.department}
                  onChange={(event) =>
                    updateField("department", event.target.value)
                  }
                >
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
                <Input
                  className="h-11"
                  placeholder="Ej: Quimbaya"
                  value={values.city}
                  onChange={(event) => updateField("city", event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Precio
                </label>
                <Input
                  className="h-11"
                  placeholder="Ej: 1450000000"
                  value={values.price}
                  onChange={(event) => updateField("price", event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Estado
                </label>
                <select
                  className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
                  value={values.status}
                  onChange={(event) => updateField("status", event.target.value)}
                >
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
                <Input
                  className="h-11"
                  placeholder="Ej: 32"
                  value={values.extensionValue}
                  onChange={(event) =>
                    updateField("extensionValue", event.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Unidad
                </label>
                <select
                  className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
                  value={values.extensionUnit}
                  onChange={(event) =>
                    updateField("extensionUnit", event.target.value)
                  }
                >
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
                <Input
                  className="h-11"
                  placeholder="Ej: 5"
                  value={values.bedrooms}
                  onChange={(event) =>
                    updateField("bedrooms", event.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Baños
                </label>
                <Input
                  className="h-11"
                  placeholder="Ej: 3"
                  value={values.bathrooms}
                  onChange={(event) =>
                    updateField("bathrooms", event.target.value)
                  }
                />
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
                  value={values.shortDescription}
                  onChange={(event) =>
                    updateField("shortDescription", event.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Descripción completa
                </label>
                <Textarea
                  placeholder="Describe la finca, accesos, cultivos, servicios, casa principal, fuentes de agua, documentos, vías, etc."
                  value={values.fullDescription}
                  onChange={(event) =>
                    updateField("fullDescription", event.target.value)
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="border-border bg-background p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Multimedia y documentos
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                        Imágenes de la finca
                    </label>
                    <ImageUploader />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Video de la finca
                </label>

                <VideoUploader />
              </div>

              <div className="space-y-2 md:col-span-2">
                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                        Documentos PDF
                    </label>
                    <DocumentUploader />
                </div>
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
                <Input
                  className="h-11"
                  placeholder="Nombre del propietario"
                  value={values.ownerName}
                  onChange={(event) =>
                    updateField("ownerName", event.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Teléfono / WhatsApp
                </label>
                <Input
                  className="h-11"
                  placeholder="300 123 4567"
                  value={values.ownerPhone}
                  onChange={(event) =>
                    updateField("ownerPhone", event.target.value)
                  }
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Correo
                </label>
                <Input
                  className="h-11"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={values.ownerEmail}
                  onChange={(event) =>
                    updateField("ownerEmail", event.target.value)
                  }
                />
              </div>
            </div>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/admin/fincas">Cancelar</Link>}
            />

            <Button className="gap-2" type="submit">
              <Save className="size-4" />
              {submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
