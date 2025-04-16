"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Camera, Award, Users } from "lucide-react"
import Button from "../components/ui/Button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "https://theflagpost.in/wp-content/uploads/2025/01/03-The-viewfinder.jpeg?height=1080&width=1920",
    "https://theflagpost.in/wp-content/uploads/2025/01/03-The-viewfinder.jpeg.jpeg",
    "https://navjeevanexpress.com/wp-content/uploads/2025/02/KANU-1.jpg?height=1080&width=1920",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src ||  "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/smstreet/media/media_files/2025/01/22/TjTgdd4icJCjDCVcvZcT.jpg?height=1080&width=1920"}
              alt={`Wildlife photo ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ position: "absolute" }}
            />
          </div>
        ))} */}
         <div className="relative h-screen" style={{ backgroundImage: 'url("https://theflagpost.in/wp-content/uploads/2025/01/03-The-viewfinder.jpeg.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sanket Reddy
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Capturing the wild through the lens of conservation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/gallery">
                Explore Gallery <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sanket</h2>
            <p className="text-zinc-300 mb-6">
              Sanket Reddy is a passionate wildlife photographer dedicated to capturing the beauty and fragility of our
              natural world. With over a decade of experience traversing the globe's most remote regions, his work
              serves as a powerful advocate for conservation efforts worldwide.
            </p>
            <p className="text-zinc-300 mb-8">
              Through his lens, Sanket tells compelling stories of endangered species and delicate ecosystems, inspiring
              viewers to appreciate and protect our planet's biodiversity.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
            src={require('../assests/images/camera-equipment.jpg')} // Update this path to your actual image file
            alt="Sanket Reddy"
            className="w-full h-full object-cover"
            style={{ position: "absolute" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Explore some of Sanket's most impactful wildlife photography from around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[300px] rounded-lg overflow-hidden"
              >
                <img
                  src={`/placeholder.svg?height=600&width=800`}
                  alt={`Featured work ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ position: "absolute" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-xl font-semibold">Wildlife Series {item}</h3>
                    <p className="text-sm text-zinc-300">Location, Year</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TNR Trust Preview */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            className="w-full h-full object-cover"
            style={{ position: "absolute" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">TNR Trust Collaboration</h2>
              <p className="text-zinc-300 mb-6">
                Discover Sanket's impactful work with TNR Trust, documenting their conservation efforts and raising
                awareness for endangered wildlife protection initiatives.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link to="/tnr-trust">Explore the Partnership</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[350px] rounded-lg overflow-hidden"
            >
              <img
                src="/placeholder.svg?height=700&width=900"
                alt="TNR Trust collaboration"
                className="w-full h-full object-cover"
                style={{ position: "absolute" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-zinc-900 rounded-lg"
            >
              <Camera className="h-12 w-12 mx-auto mb-4 text-amber-500" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-zinc-400">Expeditions Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-zinc-900 rounded-lg"
            >
              <Award className="h-12 w-12 mx-auto mb-4 text-amber-500" />
              <h3 className="text-4xl font-bold mb-2">25</h3>
              <p className="text-zinc-400">International Awards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-zinc-900 rounded-lg"
            >
              <Users className="h-12 w-12 mx-auto mb-4 text-amber-500" />
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-zinc-400">Conservation Partners</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview
      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From The Blog</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Behind-the-scenes stories, photography tips, and conservation insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tracking Tigers in Ranthambore",
                excerpt:
                  "An unforgettable journey through India's most famous tiger reserve and the challenges of wildlife photography in dense forests.",
                date: "March 15, 2023",
              },
              {
                title: "Conservation Photography: Making an Impact",
                excerpt:
                  "How wildlife photographers can contribute to conservation efforts and raise awareness about endangered species.",
                date: "February 22, 2023",
              },
              {
                title: "Essential Gear for Wildlife Photography",
                excerpt:
                  "A comprehensive guide to the equipment that has served me best in the field, from cameras to accessories.",
                date: "January 10, 2023",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-[200px]">
                  <img
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    style={{ position: "absolute" }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-amber-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-amber-500 hover:text-amber-400 inline-flex items-center">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborations, print purchases, or licensing Sanket's photography? Get in touch to discuss
              your project.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/contact">Contact Sanket</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
