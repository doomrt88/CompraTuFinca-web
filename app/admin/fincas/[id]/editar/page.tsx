import { notFound } from "next/navigation"

import { PropertyForm } from "@/components/admin/PropertyForm"
import { featuredProperties } from "@/lib/data"

type EditPropertyPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function EditPropertyPage({ params }: EditPropertyPageProps) {
  const { id } = await params

  const property = featuredProperties.find((item) => item.id === Number(id))

  if (!property) {
    notFound()
  }

  return <PropertyForm mode="edit" property={property} />
}