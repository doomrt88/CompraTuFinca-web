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
]
