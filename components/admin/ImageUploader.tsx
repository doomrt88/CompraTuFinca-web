"use client"

import { useRef, useState } from "react"
import { ImagePlus, Star, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type PreviewImage = {
  id: string
  file: File
  previewUrl: string
  isMain: boolean
}

export function ImageUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [images, setImages] = useState<PreviewImage[]>([])

  function handleFiles(files: FileList | null) {
    if (!files) return

    const newImages = Array.from(files).map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      file,
      previewUrl: URL.createObjectURL(file),
      isMain: images.length === 0 && index === 0,
    }))

    setImages((current) => [...current, ...newImages])
  }

  function removeImage(id: string) {
    setImages((current) => {
      const filtered = current.filter((image) => image.id !== id)

      if (!filtered.some((image) => image.isMain) && filtered.length > 0) {
        filtered[0].isMain = true
      }

      return filtered
    })
  }

  function setMainImage(id: string) {
    setImages((current) =>
      current.map((image) => ({
        ...image,
        isMain: image.id === id,
      })),
    )
  }

  return (
    <div className="space-y-5">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(event) => handleFiles(event.target.files)}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex min-h-40 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-6 py-8 text-center transition-colors hover:bg-primary/10"
      >
        <ImagePlus className="size-10 text-primary" />
        <p className="mt-3 font-semibold text-foreground">
          Subir imágenes de la finca
        </p>
        <p className="mt-1 max-w-md text-sm text-muted-foreground">
          Selecciona una o varias imágenes. La primera imagen será marcada como principal.
        </p>
      </button>

      {images.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden border-border p-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={image.previewUrl}
                  alt={image.file.name}
                  className="size-full object-cover"
                />

                {image.isMain && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Principal
                  </span>
                )}
              </div>

              <div className="space-y-3 p-3">
                <p className="truncate text-sm font-medium text-foreground">
                  {image.file.name}
                </p>

                <div className="flex gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-1"
                    onClick={() => setMainImage(image.id)}
                  >
                    <Star className="size-4" />
                    Principal
                  </Button>

                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    onClick={() => removeImage(image.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}