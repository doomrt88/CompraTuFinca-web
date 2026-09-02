"use client"

import { useRef, useState } from "react"
import { FileText, Trash2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type PreviewDocument = {
  id: string
  file: File
}

export function DocumentUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [documents, setDocuments] = useState<PreviewDocument[]>([])

  function handleFiles(files: FileList | null) {
    if (!files) return

    const newDocuments = Array.from(files).map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      file,
    }))

    setDocuments((current) => [...current, ...newDocuments])
  }

  function removeDocument(id: string) {
    setDocuments((current) => current.filter((document) => document.id !== id))
  }

  return (
    <div className="space-y-5">
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        multiple
        className="hidden"
        onChange={(event) => handleFiles(event.target.files)}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex min-h-32 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-6 py-8 text-center transition-colors hover:bg-primary/10"
      >
        <Upload className="size-9 text-primary" />
        <p className="mt-3 font-semibold text-foreground">
          Subir documentos PDF
        </p>
        <p className="mt-1 max-w-md text-sm text-muted-foreground">
          Selecciona escrituras, certificados, planos u otros documentos asociados a la finca.
        </p>
      </button>

      {documents.length > 0 && (
        <div className="grid gap-3">
          {documents.map((document) => (
            <Card
              key={document.id}
              className="flex items-center justify-between gap-4 border-border p-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </span>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {document.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(document.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <Button
                type="button"
                size="sm"
                variant="destructive"
                onClick={() => removeDocument(document.id)}
              >
                <Trash2 className="size-4" />
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}