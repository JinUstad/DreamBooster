"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  const testimonials = [
    {
      quote:
        "The Web Development Fundamentals course was exactly what I needed to switch careers. The instructors were knowledgeable and supportive, and the curriculum was comprehensive yet easy to follow.",
      name: "Alex Thompson",
      role: "Junior Web Developer at TechCorp",
      image: "https://st4.depositphotos.com/1049680/41374/i/450/depositphotos_413749912-stock-photo-hispanic-handsome-young-man-wearing.jpg",
    },
    {
      quote:
        "I took the React.js Masterclass after learning basic web development, and it completely transformed my skills. I'm now building complex applications with confidence and landed a great job.",
      name: "Maria Rodriguez",
      role: "Frontend Developer at StartupX",
      image: "https://www.shutterstock.com/image-photo/back-school-portrait-joyful-smiling-600nw-2484686273.jpg",
    },
    {
      quote:
        "The Full-Stack Development course was challenging but incredibly rewarding. The projects were practical and relevant, and the career support helped me land multiple job offers.",
      name: "David Kim",
      role: "Full-Stack Engineer at InnovateCo",
      image: "https://esmcglobal.com/wp-content/uploads/2024/12/Mubashir-Khan-man-image.webp",
    },
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-[300px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="mb-6">
              <img
                src={testimonials[currentSlide].image || "/placeholder.svg"}
                alt={testimonials[currentSlide].name}
                className="w-20 h-20 rounded-full border-4 border-white mx-auto"
              />
            </div>
            <p className="text-xl italic mb-6 max-w-2xl">"{testimonials[currentSlide].quote}"</p>
            <div>
              <p className="font-bold text-lg">{testimonials[currentSlide].name}</p>
              <p className="text-white/80">{testimonials[currentSlide].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="bg-blue-500 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full border-white text-white hover:bg-white/20 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="bg-blue-500 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full border-white text-white hover:bg-white/20 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next testimonial</span>
      </Button>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
