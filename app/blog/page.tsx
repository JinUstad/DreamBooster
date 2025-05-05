import Link from "next/link"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Web Development in 2025",
    excerpt:
      "Explore the emerging trends and technologies that will shape the future of web development in the coming years, from AI-powered tools to new frameworks and methodologies.",
    image: "/placeholder.svg?height=400&width=800",
    date: "May 1, 2025",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Trends",
  }

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential JavaScript Concepts Every Developer Should Know",
      excerpt:
        "Master these fundamental JavaScript concepts to level up your development skills and write cleaner code.",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201028214738/7-JavaScript-Concepts-That-Every-Developer-Must-Know.jpg",
      date: "April 25, 2025",
      author: "Michael Chen",
      readTime: "8 min read",
      category: "JavaScript",
    },
    {
      id: 2,
      title: "From Beginner to Pro: A Roadmap for Aspiring Developers",
      excerpt: "Follow this comprehensive roadmap to transform from a coding novice to a professional developer.",
      image: "https://img.freepik.com/free-vector/professional-career-elements-design_1200-212.jpg",
      date: "April 18, 2025",
      author: "Priya Patel",
      readTime: "10 min read",
      category: "Career",
    },
    {
      id: 3,
      title: "Building Accessible Web Applications: A Complete Guide",
      excerpt:
        "Learn how to create web applications that are accessible to all users, including those with disabilities.",
      image: "https://wp.accessiblyapp.com/app/uploads/2024/03/document.jpg",
      date: "April 12, 2025",
      author: "James Wilson",
      readTime: "7 min read",
      category: "Accessibility",
    },
    {
      id: 4,
      title: "Optimizing React Performance: Tips and Best Practices",
      excerpt:
        "Discover techniques to improve the performance of your React applications and provide a better user experience.",
      image: "https://qualitythought.in/wp-content/uploads/2024/08/the_future_of_web_development_reactjs.webp",
      date: "April 5, 2025",
      author: "Sarah Johnson",
      readTime: "6 min read",
      category: "React",
    },
    {
      id: 5,
      title: "Introduction to TypeScript: Why You Should Make the Switch",
      excerpt: "Explore the benefits of TypeScript and learn how to integrate it into your JavaScript projects.",
      image: "https://www.udohjeremiah.com/_next/image?url=%2Fblog%2Fwhat-you-may-not-know-about-typescript.webp&w=3840&q=100",
      date: "March 28, 2025",
      author: "Michael Chen",
      readTime: "9 min read",
      category: "TypeScript",
    },
    {
      id: 6,
      title: "Responsive Design in 2025: Beyond Media Queries",
      excerpt: "Learn modern approaches to responsive design that go beyond traditional media queries.",
      image: "https://www.excellencetechnology.in/wp-content/uploads/2024/01/CSS-Tutorial.webp",
      date: "March 21, 2025",
      author: "Priya Patel",
      readTime: "7 min read",
      category: "CSS",
    },
  ]

  const categories = ["All", "JavaScript", "React", "CSS", "TypeScript", "Career", "Trends", "Accessibility"]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="Blog"
        description="Stay updated with the latest trends, tips, and insights in the world of coding and development"
      />

      <main className="flex-grow">
        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="order-2 lg:order-1 p-8 flex flex-col justify-center">
                  <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 w-fit">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4 text-blue-700">{featuredPost.title}</h2>
                  <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500 mb-6">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20231205165904/web-development-image.webp"
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-red-600/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            {/* Search and Categories */}
            <div className="mb-10">
             

              <Tabs defaultValue="All" className="w-full">
                <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-8">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="All" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                      <Link href="#" key={post.id} className="group">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="relative overflow-hidden">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-0 right-0 m-4">
                              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{post.category}</Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-blue-700 group-hover:text-red-600 transition-colors duration-300">
                              {post.title}
                            </h3>
                            <p className="text-slate-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center text-sm text-slate-500">
                              <div className="flex items-center mr-4">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {categories.slice(1).map((category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {blogPosts
                        .filter((post) => post.category === category)
                        .map((post) => (
                          <Link href={`/blog/${post.id}`} key={post.id} className="group">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                              <div className="relative overflow-hidden">
                                <img
                                  src={post.image || "/placeholder.svg"}
                                  alt={post.title}
                                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-0 right-0 m-4">
                                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{post.category}</Badge>
                                </div>
                              </div>
                              <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-blue-700 group-hover:text-red-600 transition-colors duration-300">
                                  {post.title}
                                </h3>
                                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                                <div className="flex items-center text-sm text-slate-500">
                                  <div className="flex items-center mr-4">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {post.date}
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {post.readTime}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

           
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-xl mb-8">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
