"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ExternalLink, ShoppingCart, ImageIcon, Download, Check } from "lucide-react"
import Button from "../components/ui/Button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Sample media coverage data
const mediaCoverage = [
  {
    id: 1,
    title: "Through the lens of life",
    publication: "The New Indian Express",
    date: "March 2025",
    excerpt: "Photographer Sanket Reddy chats with CE about his debut coffee table book The Viewfinder, which has a foreword by actor R Madhavan and captures the intersection of art and environmental conversation",
    image: "https://media.assettype.com/newindianexpress%2F2025-03-09%2Fh0jvqju5%2FActor-Madhavan-First-Impression-on-Viewfinder-21.jpeg?rect=0%2C217%2C4160%2C2340&w=1024&auto=format%2Ccompress&fit=max?height=600&width=800",
    link: "https://www.newindianexpress.com/cities/bengaluru/2025/Mar/10/through-the-lens-of-life",
  },
  {
    id: 2,
    title: "Capturing the Wild: Interview with Sanket Reddy",
    publication: "Photography Journal",
    date: "January 2023",
    excerpt:
      "Exclusive interview discussing techniques, equipment, and the philosophy behind conservation photography.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 3,
    title: "Conservation Through the Lens",
    publication: "Wildlife Magazine",
    date: "November 2022",
    excerpt:
      "How Sanket Reddy's photography is helping raise awareness for endangered species and conservation efforts.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 4,
    title: "The Last Tigers: A Visual Journey",
    publication: "Conservation Today",
    date: "September 2022",
    excerpt:
      "Feature on Sanket's long-term project documenting tiger populations and conservation challenges in India.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 5,
    title: "Underwater Wonders: Marine Photography",
    publication: "Ocean Explorer",
    date: "July 2022",
    excerpt: "Showcasing Sanket's underwater photography and his work documenting marine ecosystems.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

// Sample print options
const printOptions = [
  {
    id: 1,
    name: "Standard Print",
    description: "High-quality print on premium photo paper",
    sizes: ["8×10″", "11×14″", "16×20″", "24×36″"],
    priceRange: "$75 - $250",
    features: ["Archival quality", "Vibrant colors", "Signed by artist"],
  },
  {
    id: 2,
    name: "Canvas Print",
    description: "Gallery-wrapped canvas with 1.5″ depth",
    sizes: ["16×20″", "24×36″", "30×40″", "36×48″"],
    priceRange: "$150 - $450",
    features: ["Ready to hang", "UV protective coating", "Signed by artist"],
  },
  {
    id: 3,
    name: "Metal Print",
    description: "Printed directly on aluminum with float mount",
    sizes: ["16×20″", "24×36″", "30×40″"],
    priceRange: "$200 - $550",
    features: ["Waterproof", "Scratch resistant", "Vibrant colors", "Signed by artist"],
  },
]

// Sample licensing options
const licensingOptions = [
  {
    id: 1,
    name: "Editorial Use",
    description: "For magazines, newspapers, blogs, and educational materials",
    priceRange: "$150 - $500",
    features: ["Non-exclusive rights", "One-time use", "Credit required"],
  },
  {
    id: 2,
    name: "Commercial Use",
    description: "For advertising, marketing materials, and commercial publications",
    priceRange: "$500 - $2,500",
    features: ["Non-exclusive rights", "Limited time period", "Usage restrictions apply"],
  },
  {
    id: 3,
    name: "Exclusive License",
    description: "Exclusive rights for specific usage and time period",
    priceRange: "Custom pricing",
    features: ["Exclusive rights", "Negotiable terms", "Extended usage"],
  },
]

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("media")

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Media & Services
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Media coverage, print orders, and licensing options
          </motion.p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 md:px-8 bg-black sticky top-16 z-10 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("media")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                activeTab === "media" ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              Media Coverage
            </button>
            <button
              onClick={() => setActiveTab("prints")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                activeTab === "prints" ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              Print Orders
            </button>
            <button
              onClick={() => setActiveTab("licensing")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                activeTab === "licensing" ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              Image Licensing
            </button>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      {activeTab === "media" && (
        <section className="py-16 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Media Coverage</h2>
              <p className="text-zinc-300 max-w-3xl">
                Explore features, interviews, and articles about Sanket Reddy's wildlife photography and conservation
                work.
              </p>
            </motion.div>

            <div className="space-y-12">
              {mediaCoverage.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid md:grid-cols-3 gap-8 items-center border-b border-zinc-800 pb-12"
                >
                  <div className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ position: "absolute" }}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center text-amber-500 mb-4">
                      <span className="mr-2">{item.publication}</span>
                      <span className="text-zinc-500">|</span>
                      <span className="ml-2 text-zinc-400">{item.date}</span>
                    </div>
                    <p className="text-zinc-300 mb-6">{item.excerpt}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Read Article <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Print Orders */}
      {activeTab === "prints" && (
        <section className="py-16 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Print Orders</h2>
              <p className="text-zinc-300 max-w-3xl">
                Own a piece of the wild with high-quality prints of Sanket's wildlife photography. Each print is
                personally signed and comes with a certificate of authenticity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {printOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <ImageIcon className="h-6 w-6 text-amber-500 mr-3" />
                    <h3 className="text-xl font-semibold">{option.name}</h3>
                  </div>
                  <p className="text-zinc-300 mb-4">{option.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zinc-400 mb-2">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {option.sizes.map((size) => (
                        <span key={size} className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-xs">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-zinc-300 text-sm">
                          <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold">{option.priceRange}</span>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">Order Now</Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-900 rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Custom Print Requests</h3>
              <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                Looking for a specific image or custom size? Contact us for personalized print options tailored to your
                needs.
              </p>
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link to="/contact" className="inline-flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Request Custom Print
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Image Licensing */}
      {activeTab === "licensing" && (
        <section className="py-16 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Image Licensing</h2>
              <p className="text-zinc-300 max-w-3xl">
                License Sanket's wildlife photography for your publication, marketing campaign, or creative project. All
                licensing includes high-resolution digital files.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {licensingOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <Download className="h-6 w-6 text-amber-500 mr-3" />
                    <h3 className="text-xl font-semibold">{option.name}</h3>
                  </div>
                  <p className="text-zinc-300 mb-4">{option.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-400 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-zinc-300 text-sm">
                          <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold">{option.priceRange}</span>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">Inquire</Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-900 rounded-lg p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Licensing Process</h3>
                  <ol className="space-y-4 text-zinc-300">
                    <li className="flex items-start">
                      <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        1
                      </span>
                      <span>Browse the gallery and identify the images you're interested in licensing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        2
                      </span>
                      <span>Contact us with details about your project, intended use, and the specific images.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        3
                      </span>
                      <span>Receive a custom quote based on your requirements and licensing needs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        4
                      </span>
                      <span>Upon agreement, receive high-resolution files and licensing documentation.</span>
                    </li>
                  </ol>
                  <div className="mt-6">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link to="/contact">Start Licensing Process</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Licensing Process"
                    className="w-full h-full object-cover"
                    style={{ position: "absolute" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
