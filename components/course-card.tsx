import Link from "next/link"
import { Clock, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  description: string
  image: string
  level: string
  duration: string
  price: string
}

export default function CourseCard({ title, description, image, level, duration, price }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 right-0 m-4">
          <Badge className="bg-red-100 text-red-600 hover:bg-red-200">{price}</Badge>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-blue-700 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-sm text-slate-500">
            <BarChart className="h-4 w-4 mr-1 text-blue-600" />
            {level}
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <Clock className="h-4 w-4 mr-1 text-red-600" />
            {duration}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href="/courses/details">Enroll Now</Link>
        </Button>
      </div>
    </div>
  )
}
