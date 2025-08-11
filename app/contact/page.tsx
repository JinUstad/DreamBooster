import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="Contact Us"
        description="Have questions or need assistance? We're here to help you on your coding journey"
      />

      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-blue-700">Get in Touch</h2>
                <p className="text-slate-600 mb-8">
                  We're here to answer any questions you may have about our courses, coaching methods, or enrollment
                  process. Reach out to us using any of the contact methods below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-700">Email Us</h3>
                      <p className="text-slate-600">gul.m0628@gmail.com</p>
                      <p className="text-slate-500 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-700">Call Us</h3>
                      <p className="text-slate-600">+91 851 288 9586</p>
                      <p className="text-slate-500 text-sm">Monday to Friday, 9am - 5pm IST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-700">Visit Us</h3>
                      <p className="text-slate-600">Rafikabad Colony Dasna Ghaziabad</p>
                      <p className="text-slate-600">Uttar Pradesh (201302)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-700">Send Us a Message <b className="text-red-500">Working Is Progress</b></h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course-inquiry">Course Inquiry</SelectItem>
                        <SelectItem value="enrollment">Enrollment Assistance</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-6">
                    <Label>How did you hear about us?</Label>
                    <RadioGroup defaultValue="search" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="search" id="search" />
                        <Label htmlFor="search">Search Engine</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="social" id="social" />
                        <Label htmlFor="social">Social Media</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="friend" id="friend" />
                        <Label htmlFor="friend">Friend/Colleague</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px]" />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Frequently Asked Questions</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Find quick answers to common questions about contacting us and our support services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly can I expect a response to my inquiry?",
                    answer:
                      "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our support line for immediate assistance.",
                  },
                  {
                    question: "Can I schedule a one-on-one consultation before enrolling?",
                    answer:
                      "We offer free 15-minute consultations with our course advisors to help you determine which program best fits your goals and skill level. You can schedule a consultation through our contact form or by calling our office.",
                  },
                  {
                    question: "Do you offer technical support for enrolled students?",
                    answer:
                      "Yes, all enrolled students have access to our technical support team who can assist with course-related technical issues. Support is available via email, chat, and scheduled video calls during business hours.",
                  },
                  {
                    question: "How can I provide feedback about my course experience?",
                    answer:
                      "We value your feedback! You can share your thoughts through our student portal, by emailing feedback@codecoach.com, or by filling out the contact form on this page. We regularly review all feedback to improve our courses and teaching methods.",
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

        {/* Map Section */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-blue-700">Visit Our Office</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We're located in the heart of San Francisco's tech district
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-[400px] bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-slate-600">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
