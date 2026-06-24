export const propertyTypes = [
  "Ganadera",
  "Cafetera",
  "Agrícola",
  "Recreativa",
  "Parcela",
  "Lote",
  "Casa Campestre",
  "Agroindustrial",
] as const

export const departments = [
  "Antioquia",
  "Cundinamarca",
  "Quindío",
  "Risaralda",
  "Caldas",
  "Valle del Cauca",
  "Meta",
  "Santander",
  "Tolima",
  "Huila",
  "Boyacá",
  "Casanare",
]

export const cities = [
  "Medellín",
  "Rionegro",
  "Armenia",
  "Pereira",
  "Manizales",
  "Villavicencio",
  "Bogotá",
  "Bucaramanga",
  "Ibagué",
  "Neiva",
]

export const priceRanges = [
  "Hasta $200M",
  "$200M - $500M",
  "$500M - $1.000M",
  "$1.000M - $2.000M",
  "Más de $2.000M",
]

export const areaRanges = [
  "Hasta 5 ha",
  "5 - 20 ha",
  "20 - 50 ha",
  "50 - 100 ha",
  "Más de 100 ha",
]

export type Property = {
  id: number
  title: string
  type: string
  location: string
  price: string
  area: string
  bedrooms: number
  image: string
  featured?: boolean
}

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Finca Cafetera El Mirador",
    type: "Cafetera",
    location: "Quimbaya, Quindío",
    price: "$1.450.000.000",
    area: "32 hectáreas",
    bedrooms: 5,
    image: "/property-cafetera.png",
    featured: true,
  },
  {
    id: 2,
    title: "Hacienda Ganadera La Esperanza",
    type: "Ganadera",
    location: "Puerto Berrío, Antioquia",
    price: "$2.800.000.000",
    area: "120 hectáreas",
    bedrooms: 4,
    image: "/property-ganadera.png",
    featured: true,
  },
  {
    id: 3,
    title: "Casa Campestre Valle Verde",
    type: "Recreativa",
    location: "Rionegro, Antioquia",
    price: "$1.950.000.000",
    area: "8 hectáreas",
    bedrooms: 6,
    image: "/property-recreativa.png",
    featured: true,
  },
  {
    id: 4,
    title: "Finca Agrícola Los Naranjos",
    type: "Agrícola",
    location: "Lebrija, Santander",
    price: "$890.000.000",
    area: "25 hectáreas",
    bedrooms: 3,
    image: "/property-agricola.png",
  },
  {
    id: 5,
    title: "Casa Campestre El Roble",
    type: "Casa Campestre",
    location: "La Ceja, Antioquia",
    price: "$1.200.000.000",
    area: "4 hectáreas",
    bedrooms: 4,
    image: "/property-casa-campestre.png",
  },
  {
    id: 6,
    title: "Parcela Campestre Altos del Río",
    type: "Parcela",
    location: "El Retiro, Antioquia",
    price: "$420.000.000",
    area: "2 hectáreas",
    bedrooms: 0,
    image: "/property-parcela.png",
  },
]

export const regions = [
  {
    slug: "antioquia",
    name: "Antioquia",
    departments: "Antioquia",
    description: "Fincas recreativas, ganaderas y casas campestres cerca de Medellín, Rionegro, La Ceja y El Retiro.",
    properties: "320+ propiedades",
    popularTypes: ["Recreativa", "Casa Campestre", "Ganadera"],
    image: "/region-antioquia.png",
  },
  {
    slug: "eje-cafetero",
    name: "Eje Cafetero",
    departments: "Quindío, Risaralda y Caldas",
    description: "Fincas cafeteras, casas campestres y propiedades rurales rodeadas de paisaje natural.",
    properties: "245+ propiedades",
    popularTypes: ["Cafetera", "Recreativa", "Agrícola"],
    image: "/region-eje-cafetero.png",
  },
  {
    slug: "llanos",
    name: "Los Llanos",
    departments: "Meta, Casanare y Arauca",
    description: "Grandes extensiones rurales ideales para ganadería, agricultura e inversión productiva.",
    properties: "180+ propiedades",
    popularTypes: ["Ganadera", "Agrícola", "Agroindustrial"],
    image: "/region-llanos.png",
  },
  {
    slug: "costa-caribe",
    name: "Costa Caribe",
    departments: "Atlántico, Bolívar, Córdoba, Sucre, Magdalena, Cesar y La Guajira",
    description:
      "Propiedades rurales con potencial turístico, ganadero y agrícola cerca del mar Caribe y de importantes corredores comerciales.",
    properties: "150+ propiedades",
    popularTypes: ["Ganadera", "Turística", "Agrícola"],
    image: "/region-costa-caribe.png",
  },
  {
    slug: "valle-del-cauca",
    name: "Valle del Cauca",
    departments: "Valle del Cauca",
    description:
      "Fincas agrícolas, cañeras y recreativas ubicadas en una de las regiones con mayor desarrollo agroindustrial de Colombia.",
    properties: "130+ propiedades",
    popularTypes: ["Agrícola", "Recreativa", "Agroindustrial"],
    image: "/region-valle-del-cauca.png",
  },
  {
    slug: "santanderes",
    name: "Santanderes",
    departments: "Santander y Norte de Santander",
    description:
      "Propiedades rurales ideales para actividades agrícolas, ganaderas y cafeteras en una región reconocida por su productividad.",
    properties: "110+ propiedades",
    popularTypes: ["Ganadera", "Agrícola", "Cafetera"],
    image: "/region-santanderes.png",
  },
  {
    slug: "cundinamarca",
    name: "Cundinamarca",
    departments: "Cundinamarca",
    description:
      "Casas campestres, parcelas y fincas recreativas ubicadas cerca de Bogotá y de los principales centros urbanos del país.",
    properties: "210+ propiedades",
    popularTypes: ["Casa Campestre", "Parcela", "Recreativa"],
    image: "/region-cundinamarca.png",
  },
  {
    slug: "tolima-huila",
    name: "Tolima y Huila",
    departments: "Tolima y Huila",
    description:
      "Fincas agrícolas, ganaderas y cafeteras con excelentes condiciones climáticas y alto potencial productivo.",
    properties: "140+ propiedades",
    popularTypes: ["Agrícola", "Ganadera", "Cafetera"],
    image: "/region-tolima-huila.png",
  }
]

export const areaUnits = [
  "Hectáreas",
  "Fanegadas",
  "Cuadras",
  "m²",
] as const

export const propertyStatus = [
  "Activa",
  "Pendiente",
  "Vendida",
  "Inactiva",
] as const
