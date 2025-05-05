"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              DreamBooster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path) ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

       

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-2 font-medium ${isActive(item.path) ? "text-blue-600" : "text-slate-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full">
                  Log In
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
