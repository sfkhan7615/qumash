"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Summer Collection 2025",
    description: "Discover the latest trends for the upcoming season",
    cta: "Shop Now",
    image: "/placeholder.svg?height=600&width=1600",
    link: "/categories/summer",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Be the first to wear our newest styles",
    cta: "Explore",
    image: "/placeholder.svg?height=600&width=1600",
    link: "/new-arrivals",
  },
  {
    id: 3,
    title: "Special Offers",
    description: "Up to 50% off on selected items",
    cta: "View Deals",
    image: "/placeholder.svg?height=600&width=1600",
    link: "/categories/sale",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-w-full">
            <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-10 md:p-16">
                <h1 className="max-w-md text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">{slide.title}</h1>
                <p className="my-4 max-w-md text-lg text-muted-foreground sm:text-xl">{slide.description}</p>
                <Button asChild size="lg">
                  <Link href={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
