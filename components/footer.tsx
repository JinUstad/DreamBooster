import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              DreamBooster
            </h3>
            <p className="text-slate-300 mb-6">
              Empowering the next generation of developers with expert coaching and comprehensive courses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-slate-300">gul.m0628@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-red-400" />
                <span className="text-slate-300">+91 851 288 9586</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-slate-300">Rafikabad Colony Dasna (GZB)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {[
                "Web Development Fundamentals",
                "React.js Masterclass",
                "Full-Stack Development",
                "Mobile App Development",
                "Python for Data Science",
                "UI/UX Design Fundamentals",
              ].map((course, index) => (
                <li key={index}>
                  <Link
                    href="/courses"
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Social Media */}
          <div className="">
            <h3 className="text-xl font-bold mb-6">Join Now</h3>
            <p className="text-slate-300 mb-6">
              Dive into a world where creativity meets technology, and discover how coding can open doors to endless opportunities. Don’t just dream about your future—take action and make it a reality with DreamBooster!
            </p>
            {/* <div className="flex space-x-4">
                {["https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png", "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" ].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors duration-300"
                  >
                    <img src={social} alt={`${social} icon`} className="h-5 w-5" />
                  </a>
                ))}
              </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">&copy; {currentYear} DreamBooster. All rights reserved.</p>
            {/* <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
