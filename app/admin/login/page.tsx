import Link from "next/link"
import { Leaf, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center text-white">
          <Link href="/" className="inline-flex items-center justify-center gap-2">
            <span className="flex size-11 items-center justify-center rounded-md bg-white/15 backdrop-blur">
              <Leaf className="size-6" />
            </span>
            <span className="font-serif text-2xl font-bold">
              CompraTuFinca
            </span>
          </Link>

          <p className="mt-3 text-sm text-white/75">
            Panel administrativo
          </p>
        </div>

        <Card className="border-white/15 bg-background p-6 shadow-2xl sm:p-8">
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">
              Iniciar sesión
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Ingresa con tus credenciales para administrar fincas y solicitudes.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="admin@compratufinca.com"
                  className="h-11 pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-11 pl-10"
                />
              </div>
            </div>

            <Button size="lg" className="w-full">
              Entrar al panel
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Volver al sitio
            </Link>
          </div>
        </Card>
      </div>
    </main>
  )
}