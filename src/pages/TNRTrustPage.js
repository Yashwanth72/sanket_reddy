"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ExternalLink, Heart } from "lucide-react"
import Button from "../components/ui/Button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function TNRTrustPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="TNR Trust Background"
            className="w-full h-full object-cover opacity-30"
            style={{ position: "absolute" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TNR Trust Collaboration
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Documenting conservation efforts and raising awareness for wildlife protection
          </motion.p>
        </div>
      </section>

      {/* About TNR Trust */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About TNR Trust</h2>
              <p className="text-zinc-300 mb-4">
                TNR Trust is a leading wildlife conservation organization dedicated to protecting endangered species and
                their habitats through research, education, and community engagement.
              </p>
              <p className="text-zinc-300 mb-4">
                Founded in 2005, the trust has been at the forefront of conservation efforts across multiple continents,
                with a special focus on big cats, elephants, and marine life.
              </p>
              <p className="text-zinc-300 mb-6">
                Their holistic approach combines scientific research, anti-poaching initiatives, habitat restoration,
                and community-based conservation programs to create sustainable solutions for wildlife protection.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <a
                  href="https://tnrtrust.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Visit TNR Trust Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
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
                src="/placeholder.svg?height=800&width=1200"
                alt="TNR Trust Conservation Work"
                className="w-full h-full object-cover"
                style={{ position: "absolute" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partnership</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Sanket Reddy has been collaborating with TNR Trust since 2015, documenting their conservation efforts and
              helping raise awareness through powerful visual storytelling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-lg p-6"
            >
              <div className="rounded-full bg-amber-600/20 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual Documentation</h3>
              <p className="text-zinc-400">
                Capturing the beauty of wildlife and the critical work of conservation teams in the field to create
                compelling visual narratives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-lg p-6"
            >
              <div className="rounded-full bg-amber-600/20 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Awareness Campaigns</h3>
              <p className="text-zinc-400">
                Creating impactful photography for awareness campaigns, exhibitions, and educational materials to
                inspire conservation action.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-lg p-6"
            >
              <div className="rounded-full bg-amber-600/20 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fundraising Support</h3>
              <p className="text-zinc-400">
                Contributing photography for fundraising events and limited edition prints with proceeds supporting TNR
                Trust's conservation initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Explore some of the key conservation projects documented through our partnership
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h3 className="text-2xl font-bold mb-4">Tiger Conservation Initiative</h3>
                <p className="text-zinc-300 mb-4">
                  A comprehensive project focused on protecting tiger populations in India through anti-poaching
                  efforts, habitat preservation, and community engagement.
                </p>
                <p className="text-zinc-300 mb-6">
                  Sanket spent three months documenting the daily work of conservation teams, capturing rare moments of
                  tigers in their natural habitat, and highlighting the challenges they face.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <Link to="/gallery">View Project Gallery</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2"
              >
                <img
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Tiger Conservation Project"
                  className="w-full h-full object-cover"
                  style={{ position: "absolute" }}
                />
              </motion.div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Marine Conservation Project"
                  className="w-full h-full object-cover"
                  style={{ position: "absolute" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Marine Conservation Project</h3>
                <p className="text-zinc-300 mb-4">
                  An initiative to protect coral reefs and marine life through research, sustainable fishing practices,
                  and plastic pollution reduction.
                </p>
                <p className="text-zinc-300 mb-6">
                  Sanket's underwater photography has helped document the beauty and fragility of marine ecosystems,
                  bringing attention to the urgent need for ocean conservation.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <Link to="/gallery">View Project Gallery</Link>
                </Button>
              </motion.div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h3 className="text-2xl font-bold mb-4">Elephant Protection Program</h3>
                <p className="text-zinc-300 mb-4">
                  A multi-faceted approach to elephant conservation, addressing poaching, human-wildlife conflict, and
                  habitat loss across Africa and Asia.
                </p>
                <p className="text-zinc-300 mb-6">
                  Through powerful imagery, Sanket has helped tell the stories of elephant families, their complex
                  social structures, and the dedicated rangers working to protect them.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <Link to="/gallery">View Project Gallery</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2"
              >
                <img
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Elephant Protection Program"
                  className="w-full h-full object-cover"
                  style={{ position: "absolute" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-black"
          >
            Support Wildlife Conservation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-black/80"
          >
            Join us in protecting endangered species and their habitats for future generations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
              <a href="https://tnrtrust.org/donate" target="_blank" rel="noopener noreferrer">
                Donate to TNR Trust
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
