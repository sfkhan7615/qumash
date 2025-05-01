"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="grid gap-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border">
        <Image src={images[selectedImage] || "/placeholder.svg"} alt="Product image" fill className="object-cover" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
              selectedImage === index ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
