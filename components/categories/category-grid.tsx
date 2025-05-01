import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "men",
    name: "Men",
    image: "/placeholder.svg?height=300&width=300",
    href: "/categories/men",
  },
  {
    id: "women",
    name: "Women",
    image: "/placeholder.svg?height=300&width=300",
    href: "/categories/women",
  },
  {
    id: "kids",
    name: "Kids",
    image: "/placeholder.svg?height=300&width=300",
    href: "/categories/kids",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
    href: "/categories/accessories",
  },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={category.href} className="group relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={300}
            height={300}
            className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl font-bold text-white md:text-2xl">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
