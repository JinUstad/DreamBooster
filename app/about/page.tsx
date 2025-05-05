import { Award, BookOpen, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="About Us"
        description="Learn more about our mission, values, and the team behind our coding coaching programs"
      />

      <main className="flex-grow">
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Story</h2>
                <p className="text-slate-600 mb-4">
                  Founded in 2023, DreamBooster began with a simple mission: to make quality coding education accessible to
                  everyone. Our founder, Er Gul Mohammad, a software engineer with over 3+ years of experience at leading
                  tech companies, recognized a gap in the market for personalized, practical coding education.
                </p>
                <p className="text-slate-600 mb-4">
                  What started as one-on-one mentoring sessions has grown into a comprehensive coaching platform with a
                  team of expert instructors, serving thousands of students worldwide. We've helped beginners take their
                  first steps in coding and guided experienced developers to advance their careers.
                </p>
                <p className="text-slate-600">
                  Today, we're proud to offer a wide range of courses covering everything from web development
                  fundamentals to advanced full-stack development, always staying current with the latest industry
                  trends and technologies.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                  <img
                    src="https://media.globaladmissions.com/media/asset/2024/12/781f09051e244db2808512bf84b90eac.png"
                    alt="Our team working together"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Est. 2023</p>
                  <p>3+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-12">
              To empower individuals with the skills, knowledge, and confidence to succeed in the ever-evolving world of
              technology through personalized, practical, and industry-relevant coding education.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Education</h3>
                <p>
                  We deliver comprehensive, up-to-date curriculum designed by industry experts to ensure our students
                  receive the highest quality education.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                <div className="bg-white text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
                <p>
                  We believe in tailoring our teaching methods to match each student's learning style, pace, and career
                  goals.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Success</h3>
                <p>
                  We're committed to not just teaching code, but preparing our students for successful careers in the
                  tech industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Meet Our Expert Team</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our instructors bring years of industry experience and a passion for teaching to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Jahid Khan",
                  role: "Lead Instructor",
                  bio: "3+ years as a software engineer at top tech companies. Specializes in web development and system architecture.",
                  image: "https://www.shutterstock.com/shutterstock/photos/1216439494/display_1500/stock-vector-handsome-businessman-avatar-profile-character-cool-vector-art-1216439494.jpg",
                },
                {
                  name: "Gul Mohammad",
                  role: "Senior Frontend Instructor",
                  bio: "Former UI/UX lead with expertise in React, Vue, and modern JavaScript frameworks.",
                  image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg",
                },
                {
                  name: "Sameer Faridi",
                  role: "Full Stack Developer Lead",
                  bio: "Database expert with extensive experience in Node.js, React Native, and cloud infrastructure.",
                  image: "https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg",
                },
                {
                  name: "Sahil Choudhary",
                  role: "Mobile Development Instructor",
                  bio: "Specialized in React Native and Flutter. Has shipped multiple apps with millions of downloads.",
                  image: "https://i.pinimg.com/736x/41/e0/39/41e0398984b0f1a0c79acfb0694bfcce.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Frequently Asked Questions</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Find answers to common questions about our coaching programs and methodology
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium text-blue-700">
                    What makes your coaching different from other online courses?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Unlike pre-recorded courses, we offer personalized guidance, real-time feedback, and a customized
                    learning path based on your goals and skill level. Our instructors are industry professionals who
                    bring practical experience to their teaching, and our curriculum is regularly updated to reflect
                    current industry standards and technologies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium text-blue-700">
                    Do I need prior coding experience to join your courses?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Not at all! We offer courses for all skill levels, from complete beginners to advanced developers.
                    Our beginner courses start from the very basics and gradually build your skills, while our more
                    advanced courses are designed for those looking to specialize or expand their existing knowledge.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium text-blue-700">
                    How long does it take to complete a course?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Course duration varies depending on the complexity and depth of the material. Most of our courses
                    range from 8 to 12 weeks, with about 10-15 hours of commitment per week. However, we understand that
                    everyone learns at their own pace, so you'll have access to the course materials for an extended
                    period after the formal course ends.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium text-blue-700">
                    Do you offer job placement assistance?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, we provide career support services including resume reviews, portfolio development, interview
                    preparation, and networking opportunities. Many of our advanced courses include capstone projects
                    that can be added to your portfolio. While we don't guarantee job placement, our career services
                    team works closely with you to maximize your chances of success in the job market.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium text-blue-700">
                    Can I get a refund if I'm not satisfied with the course?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We offer a 14-day money-back guarantee for all our courses. If you're not satisfied with the quality
                    of instruction or find that the course isn't the right fit for you, simply contact our support team
                    within 14 days of enrollment for a full refund.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
