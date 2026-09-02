"use client"

import { useEffect, useRef, useState } from "react"
import { Film, Play, Trash2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type SelectedVideo = {
  file: File
  previewUrl: string
}

type VideoUploaderProps = {
  initialUrl?: string
  onChange?: (video: File | null, externalUrl: string) => void
}

export function VideoUploader({
  initialUrl = "",
  onChange,
}: VideoUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [video, setVideo] = useState<SelectedVideo | null>(null)
  const [externalUrl, setExternalUrl] = useState(initialUrl)
  const [error, setError] = useState("")

  const maxSizeInMb = 250
  const maxSizeInBytes = maxSizeInMb * 1024 * 1024

  useEffect(() => {
    return () => {
      if (video?.previewUrl) {
        URL.revokeObjectURL(video.previewUrl)
      }
    }
  }, [video])

  function handleFile(file: File | undefined) {
    if (!file) return

    setError("")

    if (!file.type.startsWith("video/")) {
      setError("El archivo seleccionado no es un video válido.")
      return
    }

    if (file.size > maxSizeInBytes) {
      setError(`El video no puede superar ${maxSizeInMb} MB.`)
      return
    }

    if (video?.previewUrl) {
      URL.revokeObjectURL(video.previewUrl)
    }

    const selectedVideo = {
      file,
      previewUrl: URL.createObjectURL(file),
    }

    setVideo(selectedVideo)
    onChange?.(file, externalUrl)

    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  function removeVideo() {
    if (video?.previewUrl) {
      URL.revokeObjectURL(video.previewUrl)
    }

    setVideo(null)
    setError("")
    onChange?.(null, externalUrl)
  }

  function handleExternalUrlChange(value: string) {
    setExternalUrl(value)
    onChange?.(video?.file ?? null, value)
  }

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime"
        className="hidden"
        onChange={(event) => handleFile(event.target.files?.[0])}
      />

      {!video ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex min-h-40 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-6 py-8 text-center transition-colors hover:bg-primary/10"
        >
          <Upload className="size-10 text-primary" />

          <p className="mt-3 font-semibold text-foreground">
            Subir video de la finca
          </p>

          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            Selecciona un video MP4, WebM o MOV de hasta {maxSizeInMb} MB.
          </p>
        </button>
      ) : (
        <Card className="overflow-hidden border-border p-0">
          <div className="relative aspect-video bg-black">
            <video
              src={video.previewUrl}
              controls
              preload="metadata"
              className="size-full object-contain"
            />

            <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Play className="size-3.5" />
              Vista previa
            </span>
          </div>

          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Film className="size-5" />
              </span>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {video.file.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {(video.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => inputRef.current?.click()}
              >
                Cambiar
              </Button>

              <Button
                type="button"
                variant="destructive"
                onClick={removeVideo}
              >
                <Trash2 className="size-4" />
                Eliminar
              </Button>
            </div>
          </div>
        </Card>
      )}

      {error && (
        <p className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}

      <div className="relative">
        <div className="absolute inset-x-0 top-1/2 border-t border-border" />
        <div className="relative mx-auto w-fit bg-background px-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          o usa una URL externa
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="video-url"
          className="text-sm font-medium text-foreground"
        >
          URL del video
        </label>

        <Input
          id="video-url"
          type="url"
          className="h-11"
          value={externalUrl}
          onChange={(event) => handleExternalUrlChange(event.target.value)}
          placeholder="https://youtube.com/... o https://vimeo.com/..."
        />

        <p className="text-xs text-muted-foreground">
          Más adelante podremos almacenar el video en Cloudinary, Mux o Vimeo y
          guardar aquí la URL resultante.
        </p>
      </div>
    </div>
  )
}