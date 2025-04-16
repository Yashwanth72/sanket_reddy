"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Search, Calendar, User, Tag, ChevronRight } from "lucide-react"
import Button from "../components/ui/Button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Tracking Tigers in Ranthambore",
    excerpt:
      "An unforgettable journey through India's most famous tiger reserve and the challenges of wildlife photography in dense forests.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "March 15, 2023",
    author: "Sanket Reddy",
    category: "Expeditions",
    tags: ["Tigers", "India", "Wildlife"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "tracking-tigers-ranthambore",
  },
  {
    id: 2,
    title: "Conservation Photography: Making an Impact",
    excerpt:
      "How wildlife photographers can contribute to conservation efforts and raise awareness about endangered species.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "February 22, 2023",
    author: "Sanket Reddy",
    category: "Conservation",
    tags: ["Conservation", "Impact", "Awareness"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "conservation-photography-impact",
  },
  {
    id: 3,
    title: "Essential Gear for Wildlife Photography",
    excerpt:
      "A comprehensive guide to the equipment that has served me best in the field, from cameras to accessories.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "January 10, 2023",
    author: "Sanket Reddy",
    category: "Photography Tips",
    tags: ["Gear", "Equipment", "Tips"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "essential-gear-wildlife-photography",
  },
  {
    id: 4,
    title: "The Art of Patience in Wildlife Photography",
    excerpt: "Why patience is the most important skill for any wildlife photographer and how to develop it.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "December 5, 2022",
    author: "Sanket Reddy",
    category: "Photography Tips",
    tags: ["Patience", "Techniques", "Wildlife"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "art-of-patience-wildlife-photography",
  },
  {
    id: 5,
    title: "Underwater Photography: Challenges and Rewards",
    excerpt: "Exploring the unique challenges and incredible rewards of capturing marine life beneath the waves.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "November 18, 2022",
    author: "Sanket Reddy",
    category: "Underwater",
    tags: ["Underwater", "Marine", "Techniques"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "underwater-photography-challenges-rewards",
  },
  {
    id: 6,
    title: "Ethical Wildlife Photography: Best Practices",
    excerpt: "Guidelines for ethical wildlife photography that respects animals and their habitats.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "October 30, 2022",
    author: "Sanket Reddy",
    category: "Ethics",
    tags: ["Ethics", "Guidelines", "Respect"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "ethical-wildlife-photography-practices",
  },
]

// Categories
const categories = ["All", "Expeditions", "Conservation", "Photography Tips", "Underwater", "Ethics"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

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
            Blog & Stories
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Behind-the-scenes stories, photography tips, and conservation insights
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 md:px-8 bg-black sticky top-16 z-10 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
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
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-lg overflow-hidden"
                >
                  <Link to={`/blog/${post.slug}`} className="block relative h-[200px]">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{ position: "absolute" }}
                    />
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-zinc-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold mb-3 hover:text-amber-500 transition-colors">{post.title}</h2>
                    </Link>

                    <p className="text-zinc-300 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 text-amber-500 mr-2" />
                        <span className="text-sm text-zinc-400">{post.category}</span>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-amber-500 hover:text-amber-400 inline-flex items-center text-sm"
                      >
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-zinc-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to the Newsletter</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest stories, photography tips, and upcoming expeditions
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                required
              />
              <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-zinc-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
