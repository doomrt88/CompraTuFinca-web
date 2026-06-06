"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import {
  propertyTypes,
  departments,
  cities,
  priceRanges,
  areaRanges,
} from "@/lib/data"

function Field({
  label,
  placeholder,
  options,
}: {
  label: string
  placeholder: string
  options: readonly string[]
}) {
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label className="px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      <Select>
        <SelectTrigger className="h-11 w-full border-border bg-background">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function SearchBar() {
  return (
    <div className="rounded-2xl border border-white/20 bg-background/95 p-4 shadow-2xl backdrop-blur sm:p-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Field
          label="Tipo"
          placeholder="Tipo de finca"
          options={propertyTypes}
        />
        <Field
          label="Departamento"
          placeholder="Departamento"
          options={departments}
        />
        <Field label="Ciudad" placeholder="Ciudad" options={cities} />
        <Field label="Precio" placeholder="Rango de precio" options={priceRanges} />
        <Field label="Área" placeholder="Área (ha)" options={areaRanges} />
      </div>
      <Button
        size="lg"
        className="mt-4 h-12 w-full gap-2 text-base font-semibold"
      >
        <Search className="size-5" />
        Buscar propiedades
      </Button>
    </div>
  )
}
