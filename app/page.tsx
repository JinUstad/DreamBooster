import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import TestimonialSlider from "@/components/testimonial-slider"
import CourseCard from "@/components/course-card"
import FeatureSection from "@/components/feature-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        {/* Featured Courses */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Featured Courses</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Accelerate your career with our industry-leading coding courses designed for all skill levels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CourseCard
                title="Web Development Fundamentals"
                description="Master HTML, CSS, and JavaScript to build responsive websites from scratch."
                image="https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Web_Development_Banner_Image_0e476d1ab6.webp"
                level="Beginner"
                duration="8 weeks"
                price="₹4500"
              />
              <CourseCard
                title="React.js "
                description="Learn to build modern web applications with React.js and related technologies."
                image="https://dopetgztsfho3.cloudfront.net/When_and_Why_Use_React_Pros_Cons_Use_Cases_b7a3ed0955.webp"
                level="Intermediate"
                duration="10 weeks"
                price="₹7000"
              />
              <CourseCard
                title="Full-Stack Development"
                description="Become a versatile developer with both frontend and backend expertise."
                image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
                level="Advanced"
                duration="12 weeks"
                price="$499"
              />
            </div>

            <div className="text-center mt-10">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/courses">
                  View All Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <FeatureSection />

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Success Stories</h2>
              <p className="max-w-2xl mx-auto">
                Hear from our students who have transformed their careers through our coaching programs
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Latest from Our Blog</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Stay updated with the latest trends, tips, and insights in the world of coding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201026224623/Top-10-Web-Development-Trends-for-2020.png"
                      alt="Blog post thumbnail"
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-blue-700">The Future of Web Development in 2025</CardTitle>
                  <CardDescription>May 1, 2025 • 5 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Explore the emerging trends and technologies that will shape the future of web development in the
                    coming years.
                  </p>
                </CardContent>               
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1400/0*qFTan_4FAFLerC26"
                      alt="Blog post thumbnail"
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-blue-700">
                    10 Essential JavaScript Concepts Every Developer Should Know
                  </CardTitle>
                  <CardDescription>April 25, 2025 • 8 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Master these fundamental JavaScript concepts to level up your development skills and write cleaner
                    code.
                  </p>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline" className="text-blue-600 hover:text-blue-700">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter> */}
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="https://xenoss.io/wp-content/uploads/2024/01/fituared-hiring-ai-dev-1020h588.jpg"
                      alt="Blog post thumbnail"
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-blue-700">
                    From Beginner to Pro: A Roadmap for Aspiring Developers
                  </CardTitle>
                  <CardDescription>April 18, 2025 • 10 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Follow this comprehensive roadmap to transform from a coding novice to a professional developer.
                  </p>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline" className="text-blue-600 hover:text-blue-700">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter> */}
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/blog">
                  View All Articles <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
              <p className="text-xl mb-8">
                Join thousands of students who have transformed their careers through our expert coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-blue-500 border-white text-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
