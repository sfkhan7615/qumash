// Mock product data
// In a real application, this would be fetched from an API

export type Product = {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount: number
  rating: number
  reviewCount: number
  images: string[]
  category: string
  isNew?: boolean
  isFeatured?: boolean
  inStock: boolean
  tags: string[]
}

const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    description: "A comfortable and versatile t-shirt made from 100% cotton.",
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    rating: 4.5,
    reviewCount: 128,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "men",
    isNew: true,
    isFeatured: true,
    inStock: true,
    tags: ["t-shirt", "cotton", "basics"],
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with a comfortable stretch.",
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.2,
    reviewCount: 95,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "men",
    isFeatured: true,
    inStock: true,
    tags: ["jeans", "denim", "slim fit"],
  },
  {
    id: "3",
    name: "Oversized Hoodie",
    description: "A cozy oversized hoodie perfect for lounging or casual outings.",
    price: 49.99,
    discount: 0,
    rating: 4.8,
    reviewCount: 210,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "women",
    isNew: true,
    isFeatured: true,
    inStock: true,
    tags: ["hoodie", "oversized", "casual"],
  },
  {
    id: "4",
    name: "Running Shoes",
    description: "Lightweight and responsive running shoes for maximum performance.",
    price: 119.99,
    discount: 0,
    rating: 4.6,
    reviewCount: 175,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "accessories",
    isFeatured: true,
    inStock: true,
    tags: ["shoes", "running", "athletic"],
  },
  {
    id: "5",
    name: "Leather Crossbody Bag",
    description: "A stylish and practical leather crossbody bag for everyday use.",
    price: 89.99,
    originalPrice: 99.99,
    discount: 10,
    rating: 4.4,
    reviewCount: 88,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "accessories",
    isFeatured: true,
    inStock: true,
    tags: ["bag", "leather", "crossbody"],
  },
  {
    id: "6",
    name: "Kids Graphic T-Shirt",
    description: "Fun and colorful graphic t-shirt for kids.",
    price: 19.99,
    discount: 0,
    rating: 4.3,
    reviewCount: 62,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "kids",
    isNew: true,
    isFeatured: true,
    inStock: true,
    tags: ["kids", "t-shirt", "graphic"],
  },
  {
    id: "7",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.7,
    reviewCount: 203,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "accessories",
    isFeatured: true,
    inStock: true,
    tags: ["headphones", "wireless", "audio"],
  },
  {
    id: "8",
    name: "Summer Dress",
    description: "A light and flowy summer dress perfect for warm days.",
    price: 69.99,
    discount: 0,
    rating: 4.5,
    reviewCount: 117,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "women",
    isFeatured: true,
    inStock: true,
    tags: ["dress", "summer", "casual"],
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(currentProductId: string): Product[] {
  const currentProduct = getProductById(currentProductId)
  if (!currentProduct) return []

  // Get products in the same category, excluding the current product
  return products
    .filter((product) => product.id !== currentProductId && product.category === currentProduct.category)
    .slice(0, 4) // Limit to 4 related products
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
  )
}
