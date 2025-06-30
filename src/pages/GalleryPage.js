"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Gallery categories
const categories = ["All", "Wildlife", "Birds", "Landscapes", "Underwater", "Expeditions","TNR Trust"]

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    title: "Bengal Tiger",
    category: "Wildlife",
    location: "Ranthambore, India",
    image: require('../assests/images/hero3.jpg'),
  },
  {
    id: 2,
    title: "African Elephant",
    category: "Wildlife",
    location: "Serengeti, Tanzania",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 3,
    title: "Himalayan Landscape",
    category: "Landscapes",
    location: "Nepal",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 4,
    title: "Kingfisher in Action",
    category: "Birds",
    location: "Kerala, India",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 5,
    title: "Coral Reef",
    category: "Underwater",
    location: "Great Barrier Reef, Australia",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 6,
    title: "Snow Leopard",
    category: "Wildlife",
    location: "Himalayas",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 7,
    title: "Amazon Expedition",
    category: "Expeditions",
    location: "Amazon Rainforest, Brazil",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 8,
    title: "Flamingo Flock",
    category: "Birds",
    location: "Lake Nakuru, Kenya",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 9,
    title: "Desert Sunset",
    category: "Landscapes",
    location: "Sahara Desert",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 10,
    title: "Whale Shark",
    category: "Underwater",
    location: "Maldives",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 11,
    title: "Arctic Expedition",
    category: "Expeditions",
    location: "Svalbard, Norway",
    image: require('../assests/images/empty.jpg'),
  },
  {
    id: 12,
    title: "Mountain Gorilla",
    category: "Wildlife",
    location: "Rwanda",
    image: require('../assests/images/empty.jpg'),
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState(null)

  // Filter gallery items based on selected category
  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
            Photography Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore Sanket's collection of wildlife photography from around the world
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-8 bg-black sticky top-16 z-10 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setLightboxImage(item)}
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ position: "absolute" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-zinc-300">{item.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>

          <div className="max-w-5xl w-full">
            <div className="relative h-[70vh]">
              <img
                src={lightboxImage.image || "/placeholder.svg"}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
                style={{ position: "absolute" }}
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold">{lightboxImage.title}</h3>
              <p className="text-zinc-300">{lightboxImage.location}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
