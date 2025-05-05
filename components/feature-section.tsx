"use client"

import { useState } from "react"
import { Code, BookOpen, Users, Award, CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function FeatureSection() {
  const features = [
    {
      id: "expert-instructors",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience in top tech companies.",
      benefits: [
        "Instructors with 10+ years of industry experience",
        "Regular curriculum updates to match industry trends",
        "Personalized feedback on your code and projects",
        "Office hours for one-on-one guidance",
      ],
      image: "https://media.istockphoto.com/id/1704590314/photo/office-manager-talks-to-the-new-intern.jpg?s=612x612&w=0&k=20&c=yvJYae5cZoQ3W7s_tuWsDs6srqR4WWuSWJJfsLhZlUU=",
    },
    {
      id: "comprehensive-courses",
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      title: "Comprehensive Courses",
      description: "Our structured curriculum takes you from fundamentals to advanced concepts with hands-on projects.",
      benefits: [
        "Step-by-step learning path for each technology",
        "Real-world projects to build your portfolio",
        "Comprehensive course materials and resources",
        "Lifetime access to course updates",
      ],
      image: "https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg",
    },
    {
      id: "community",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Supportive Community",
      description: "Join a thriving community of learners and professionals to accelerate your growth.",
      benefits: [
        "Active Discord community for peer support",
        "Weekly group coding sessions and challenges",
        "Networking opportunities with industry professionals",
        "Alumni network for continued growth",
      ],
      image: "https://media.istockphoto.com/id/1445245272/photo/diversity-support-and-people-holding-hands-in-trust-and-unity-for-community-against-sky.jpg?s=612x612&w=0&k=20&c=wi9OAUatSVYFEAEyLT5k3RUX2LLVhF_olKWTwOoIHR0=",
    },
    {
      id: "career-support",
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Career Support",
      description: "We're committed to your success beyond the classroom with comprehensive career services.",
      benefits: [
        "Resume and portfolio reviews",
        "Mock interviews and technical preparation",
        "Job placement assistance",
        "Career coaching and mentorship",
      ],
      image: "https://cdn.prod.website-files.com/615cc8f463d67d6b52e5bb6d/6399854d09325281c1129e42_Photo%20from%20a%20student%20meetup%20in%20Lagos%2C%20Nigeria..webp",
    },
  ]

  const [activeTab, setActiveTab] = useState(features[0].id)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-blue-700">Why Choose CodeCoach</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality coding education with a focus on your success
          </p>
        </div>

        <Tabs defaultValue={features[0].id} value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent h-auto">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={`flex flex-col items-center p-6 rounded-lg border-2 transition-all duration-300 h-auto space-y-3 ${
                  activeTab === feature.id ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-blue-200"
                }`}
              >
                <div className={`p-3 rounded-full ${activeTab === feature.id ? "bg-blue-100" : "bg-slate-100"}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-700">{feature.title}</h3>
                  <p className="text-slate-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="w-full h-auto" />
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
