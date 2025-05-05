import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import CourseCard from "@/components/course-card"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Master HTML, CSS, and JavaScript to build responsive websites from scratch.",
      image: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg",
      level: "Beginner",
      duration: "8 weeks",
      price: "₹4500",
      category: "web",
    },
    {
      id: 2,
      title: "React.js Masterclass",
      description: "Learn to build modern web applications with React.js and related technologies.",
      image: "https://i.ytimg.com/vi/MHn66JJH5zs/maxresdefault.jpg",
      level: "Intermediate",
      duration: "10 weeks",
      price: "₹6000",
      category: "web",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "Become a versatile developer with both frontend and backend expertise.",
      image: "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
      level: "Advanced",
      duration: "12 weeks",
      price: "₹8000",
      category: "web",
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps for iOS and Android using React Native.",
      image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740",
      level: "Intermediate",
      duration: "10 weeks",
      price: "₹7000",
      category: "mobile",
    },
    {
      id: 5,
      title: "iOS Development with Swift",
      description: "Learn to build native iOS applications using Swift and SwiftUI.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230617194030/Getting-Started-with-iOS-Development.webp",
      level: "Intermediate",
      duration: "12 weeks",
      price: "₹8000",
      category: "mobile",
    },
    {
      id: 6,
      title: "Backend Development with Node.js",
      description: "Master server-side programming with Node.js, Express, and MongoDB.",
      image: "https://www.moditrainings.com/assets/images/course/MTI-05062024140050.webp",
      level: "Intermediate",
      duration: "10 weeks",
      price: "₹8000",
      category: "backend",
    },
    {
      id: 7,
      title: "Python for Data Science",
      description: "Learn Python programming for data analysis, visualization, and machine learning.",
      image: "https://www.accuwebhosting.com/blog/wp-content/uploads/2023/06/pythom-data-science.jpg",
      level: "Beginner",
      duration: "8 weeks",
      price: "₹9000",
      category: "data",
    },
    {
      id: 8,
      title: "UI/UX Design Fundamentals",
      description: "Master the principles of user interface and experience design for digital products.",
      image: "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?semt=ais_hybrid&w=740",
      level: "Beginner",
      duration: "6 weeks",
      price: "₹5000",
      category: "design",
    },
    {
      id: 9,
      title: "DevOps and Cloud Engineering",
      description: "Learn to implement CI/CD pipelines and manage cloud infrastructure.",
      image: "https://caskgov.com/wp-content/uploads/2024/01/cloud-infrastructure-blog-post-jpg.webp",
      level: "Advanced",
      duration: "12 weeks",
      price: "₹9000",
      category: "devops",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="Our Courses"
        description="Explore our comprehensive range of coding and development courses designed for all skill levels"
      />

      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Search and Filter */}
            {/* <div className="bg-white rounded-lg shadow-md p-6 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                  <Input placeholder="Search courses..." className="pl-10" />
                </div>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}

            {/* Course Categories */}
            <Tabs defaultValue="all" className="mb-10">
              <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8">
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="web">Web Dev</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Dev</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
                <TabsTrigger value="design">UI/UX Design</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      level={course.level}
                      duration={course.duration}
                      price={course.price}
                    />
                  ))}
                </div>
              </TabsContent>

              {["web", "mobile", "backend", "data", "design", "devops"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses
                      .filter((course) => course.category === category)
                      .map((course) => (
                        <CourseCard
                          key={course.id}
                          title={course.title}
                          description={course.description}
                          image={course.image}
                          level={course.level}
                          duration={course.duration}
                          price={course.price}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Course Bundles */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Special Course Bundles</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Save money and accelerate your learning with our carefully curated course bundles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Web Developer Bundle</h3>
                  <div className="text-red-600 font-bold mb-4">Save Money</div>
                  <p className="text-slate-600 mb-6">
                    Master all aspects of web development with this comprehensive bundle. Includes Web Fundamentals,
                    React.js, and Full-Stack Development courses.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-blue-700">₹4500</span>
                      <span className="text-slate-500 line-through ml-2">₹7000</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      3 Courses
                    </span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Mobile Developer Bundle</h3>
                  <div className="text-red-600 font-bold mb-4">Save Money</div>
                  <p className="text-slate-600 mb-6">
                    Learn to build apps for iOS and Android with our mobile development bundle. Includes React Native
                    and iOS Development courses.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-blue-700">₹7000</span>
                      <span className="text-slate-500 line-through ml-2">₹10000</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      2 Courses
                    </span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Enroll Now</Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Career Starter Bundle</h3>
                  <div className="text-red-600 font-bold mb-4">Save Money</div>
                  <p className="text-slate-600 mb-6">
                    Kickstart your tech career with our most popular beginner-friendly courses. Perfect for those new to
                    coding.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-blue-700">₹5000</span>
                      <span className="text-slate-500 line-through ml-2">₹8000</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      3 Courses
                    </span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="mb-4">{"⭐⭐⭐⭐⭐"}</div>
                <p className="italic mb-6">
                  "The Web Development Fundamentals course was exactly what I needed to switch careers. The instructors
                  were knowledgeable and supportive, and the curriculum was comprehensive yet easy to follow."
                </p>
                <div>
                  <p className="font-bold">Alex Thompson</p>
                  <p className="text-sm">Junior Web Developer at TechCorp</p>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="mb-4">{"⭐⭐⭐⭐⭐"}</div>
                <p className="italic mb-6">
                  "I took the React.js Masterclass after learning basic web development, and it completely transformed
                  my skills. I'm now building complex applications with confidence and landed a great job."
                </p>
                <div>
                  <p className="font-bold">Maria Rodriguez</p>
                  <p className="text-sm">Frontend Developer at StartupX</p>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="mb-4">{"⭐⭐⭐⭐⭐"}</div>
                <p className="italic mb-6">
                  "The Full-Stack Development course was challenging but incredibly rewarding. The projects were
                  practical and relevant, and the career support helped me land multiple job offers."
                </p>
                <div>
                  <p className="font-bold">David Kim</p>
                  <p className="text-sm">Full-Stack Engineer at InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Frequently Asked Questions</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Have questions about our courses? Find answers to common questions below
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "How do I enroll in a course?",
                    answer:
                      "Enrolling is simple! Browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll be guided through the payment process, and once completed, you'll receive immediate access to the course materials.",
                  },
                  {
                    question: "What are the prerequisites for your courses?",
                    answer:
                      "Prerequisites vary by course. Beginner courses have no prerequisites, while intermediate and advanced courses may require specific knowledge or skills. Each course page clearly lists any prerequisites needed.",
                  },
                  {
                    question: "Can I access the course materials after completion?",
                    answer:
                      "Yes! Once you enroll in a course, you'll have lifetime access to the course materials, including any future updates. This allows you to revisit concepts and stay current with evolving technologies.",
                  },
                  {
                    question: "Do you offer any discounts or scholarships?",
                    answer:
                      "We offer periodic discounts throughout the year, as well as special bundle pricing for multiple courses. We also have a limited scholarship program for underrepresented groups in tech. Contact our support team for more information.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-blue-700 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
