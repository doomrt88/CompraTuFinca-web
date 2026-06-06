import { Plane, Eye, ShieldCheck, Clock } from "lucide-react"

const benefits = [
  {
    icon: Plane,
    title: "Recorridos aéreos en dron",
    description:
      "Cada propiedad incluye video profesional en dron para que conozcas cada hectárea sin salir de casa.",
  },
  {
    icon: Eye,
    title: "Vistas reales y verificadas",
    description:
      "Olvídate de fotos engañosas. Observa los linderos, accesos y topografía exactos de la finca.",
  },
  {
    icon: ShieldCheck,
    title: "Propiedades verificadas",
    description:
      "Validamos documentación y titularidad para que compres con total seguridad y respaldo legal.",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo y viajes",
    description:
      "Filtra y descarta opciones desde el video antes de desplazarte. Visita solo las fincas que valen la pena.",
  },
]

export function Benefits() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Por qué CompraTuFinca
          </span>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold sm:text-4xl">
            La única plataforma con video en dron de cada finca
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-white/80">
            Llevamos la compra de propiedades rurales a otro nivel con
            tecnología que te muestra la verdad del terreno.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-start text-left">
              <span className="flex size-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <b.icon className="size-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
