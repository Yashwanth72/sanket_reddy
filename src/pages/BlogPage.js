"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            BLOG PAGE
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            This page is currently not available.
            Connecting to blog page.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
