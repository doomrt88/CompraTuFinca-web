import Link from "next/link"
import {
  Building2,
  FileText,
  Home,
  MessageSquare,
  Plus,
  Users,
} from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stats = [
  {
    title: "Fincas publicadas",
    value: "24",
    icon: Home,
  },
  {
    title: "Pendientes de publicación",
    value: "7",
    icon: Building2,
  },
  {
    title: "Solicitudes de vendedores",
    value: "15",
    icon: Users,
  },
  {
    title: "Mensajes recibidos",
    value: "31",
    icon: MessageSquare,
  },
]

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <section className="relative overflow-hidden bg-primary pt-8 pb-8 text-primary-foreground">
        <img
          src="/hero-finca.png"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-primary/60" />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6">
          <div>
            <h1 className="font-serif text-4xl font-bold">
              Panel Administrativo
            </h1>
            <p className="mt-2 text-primary-foreground/80">
              Gestión central de CompraTuFinca.
            </p>
          </div>

          <Button
            nativeButton={false}
            render={<Link href="/">Ver sitio web</Link>}
            variant="secondary"
          />
        </div>
      </section>

      <div className="mx-auto mt-4 max-w-7xl px-6 pb-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <Card
                key={stat.title}
                className="border-border bg-background p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="mt-2 text-4xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>

                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="size-6" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Accesos rápidos
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card className="border-border bg-background p-6 shadow-sm">
              <Home className="size-8 text-primary" />

              <h3 className="mt-4 text-lg font-bold text-foreground">
                Fincas
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Administrar propiedades publicadas.
              </p>

              <Button
                className="mt-5 w-full"
                nativeButton={false}
                render={<Link href="/admin/fincas">Administrar</Link>}
              />
            </Card>

            <Card className="border-border bg-background p-6 shadow-sm">
              <Plus className="size-8 text-primary" />

              <h3 className="mt-4 text-lg font-bold text-foreground">
                Nueva finca
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Crear una nueva publicación.
              </p>

              <Button
                className="mt-5 w-full"
                nativeButton={false}
                render={<Link href="/admin/fincas/nueva">Crear</Link>}
              />
            </Card>

            <Card className="border-border bg-background p-6 shadow-sm">
              <Users className="size-8 text-primary" />

              <h3 className="mt-4 text-lg font-bold text-foreground">
                Solicitudes de Venta
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Solicitudes de propietarios.
              </p>

              <Button
                className="mt-5 w-full"
                nativeButton={false}
                render={<Link href="/admin/leads">Ver Solicitudes</Link>}
              />
            </Card>

            <Card className="border-border bg-background p-6 shadow-sm">
              <FileText className="size-8 text-primary" />

              <h3 className="mt-4 text-lg font-bold text-foreground">
                Contactos
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Mensajes recibidos desde la web.
              </p>

              <Button
                className="mt-5 w-full"
                nativeButton={false}
                render={<Link href="/admin/contactos">Ver mensajes</Link>}
              />
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}