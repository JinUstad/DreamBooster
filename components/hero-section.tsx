"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Code, BookOpen, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Master Coding with Expert Guidance",
      description: "Transform your career with our comprehensive coding courses and personalized coaching.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Learn Web & App Development",
      description: "From HTML basics to advanced React applications, we've got courses for every skill level.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Join Our Community of Developers",
      description: "Connect with fellow learners and industry professionals in our supportive community.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-red-900/70 z-10" />
          <img src="https://arihantacademy.com/wp-content/uploads/2023/04/220-SM744603.jpg" alt={slide.title} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div
            key={`buttons-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/courses">
                Explore Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-blue-500 hover:bg-white/10">
              <Link href="/about">Learn More </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Feature Cards */}
      {/* <div className="absolute -bottom-16 left-0 right-0 z-30 container mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
          {[
            {
              icon: <Code className="h-6 w-6 text-blue-600" />,
              title: "Expert Instructors",
              description: "Learn from industry professionals",
              color: "bg-blue-100",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-red-600" />,
              title: "Comprehensive Courses",
              description: "From beginner to advanced levels",
              color: "bg-red-100",
            },
            {
              icon: <Users className="h-6 w-6 text-blue-600" />,
              title: "Supportive Community",
              description: "Connect with fellow learners",
              color: "bg-blue-100",
            },
            {
              icon: <Award className="h-6 w-6 text-red-600" />,
              title: "Career Support",
              description: "Job placement assistance",
              color: "bg-red-100",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className={`${feature.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start">
                <div className="mr-4 bg-white p-3 rounded-full">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{feature.title}</h3>
                  <p className="text-slate-700">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  )
}
