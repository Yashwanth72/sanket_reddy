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
    date: "Mar 2025",
    excerpt: "Photographer Sanket Reddy chats with CE about his debut coffee table book The Viewfinder, which has a foreword by actor R Madhavan and captures the intersection of art and environmental conversation",
    image: "https://media.assettype.com/newindianexpress%2F2025-03-09%2Fh0jvqju5%2FActor-Madhavan-First-Impression-on-Viewfinder-21.jpeg?rect=0%2C217%2C4160%2C2340&w=1024&auto=format%2Ccompress&fit=max?height=600&width=800",
    link: "https://www.newindianexpress.com/cities/bengaluru/2025/Mar/10/through-the-lens-of-life",
  },
  {
    id: 2,
    title: "Top 5 Indian National Parks for Unforgettable Wildlife Photography This Photography Day",
    publication: "Travellers Bungalow ",
    date: "Aug 2024",
    excerpt:
      "By Sanket Reddy,a passion driven wilderness enthusiast, nature photographer, author, entrepreneur, and conservationist",
    image: "https://travellersworldonline.com/wp-content/uploads/2024/08/Indian-National-Parks-.jpg?height=600&width=800",
    link: "https://travellersworldonline.com/top-5-indian-national-parks-for-unforgettable-wildlife-photography-this-photography-day/",
  },
  
  {
    id: 4,
    title: " Exclusive: Wildlife Photographer Sanket Reddy On Human-Wildlife Conflict & Coming Face To Face With A Black Panther",
    publication: "Times Now",
    date: "Sep 2024",
    excerpt:
      "From the icy expanses of Alaska to the lush rainforests of South America, Reddy has traversed the globe with a camera in hand, capturing vivid portraits of wildlife in their natural habitats.",
    image: "https://images.timesnownews.com/thumb/msid-112934436,thumbsize-130390,width-1280,height-720,resizemode-75/112934436.jpg?height=600&width=800",
    link: "https://www.timesnownews.com/travel/travelogues/wildlife-photographer-sanket-reddy-on-human-wildlife-conflict-coming-face-to-face-with-a-black-panther-article-112934403",
  },
  {
    id: 5,
    title: "International Red Panda Day: Amazing And Interesting Facts About Red Panda",
    publication: "Zee News",
    date: "Sep 2024",
    excerpt: "International Red Panda Day is celebrated on the third Saturday of September each year. In 2024, this will be on Saturday, September 21. Check some interesting and amazing facts of Red Panda.",
    image: "https://english.cdn.zeenews.com/sites/default/files/2024/09/21/1518064-image10-1.jpg?height=600&width=800",
    link: "https://zeenews.india.com/photos/lifestyle/international-red-panda-day-amazing-and-interesting-facts-of-red-panda-2796256",
  },
  {
    id: 6,
    title: "International Red Panda Day: Amazing And Interesting Facts About Red Panda",
    publication: "MSN - Zee Newsr",
    date: "Sep 2024",
    excerpt: "Red pandas have been around for millions of years. Fossils dating back 5 to 8 million years show that ancestors of red pandas roamed Europe and Asia long before modern day species appeared",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1qVOHt.img?w=800&h=435&q=60&m=2&f=jpg?height=600&width=800",
    link: "https://www.msn.com/en-in/lifestyle/travel/international-red-panda-day-amazing-and-interesting-facts-about-red-panda/ss-AA1qVVZR ",
  },
  {
    id: 7,
    title: "Ethics in wildlife photography: To what extent would you go for a shot?",
    publication: "The Times of India - Times Travel",
    date: "Oct 2024",
    excerpt: "Ethical wildlife photography involves respecting animals and their habitats. Using long lenses and keeping a safe distance prevents disturbing wildlife. Photographers should leave no trace after capturing shots.",
    image: "https://static.toiimg.com/thumb/113931855/Gentoo-penguins.jpg?width=636&height=358&resize=4?height=600&width=800",
    link: "https://timesofindia.indiatimes.com/travel/destinations/ethics-in-wildlife-photography-to-what-extent-would-you-go-for-a-shot/articleshow/113931891.cms",
  },
  {
    id: 8,
    title: "How can wildlife photography raise awareness of conservation efforts?",
    publication: "India Today ",
    date: "Oct 2024",
    excerpt: "Capturing the beauty of wildlife helps people connect with nature and understand the importance of preserving it. Wildlife photography turns attention to endangered species, sparking action for conservation.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/how-can-wildlife-photography-raises-awareness-for-conservation-efforts-image-captured-by-saket-redd-23473351-16x9_0.jpeg?VersionId=pGvchF.L9Ww1uKKnANnlmuiDTIHXllaH&size=690:388?height=600&width=800",
    link: "https://www.indiatoday.in/information/story/how-can-wildlife-photography-raise-awareness-of-conservation-efforts-2621748-2024-10-23",
  },
  {
    id: 9,
    title: "Lessons from the Wild: How animal and Human Behaviour are Interlinked",
    publication: "News18",
    date: "Oct 2024",
    excerpt: "Nature, including animals, has been inspiring and guiding us humans from the very beginning of time. Every invention, big or small, has been fuelled by Nature and her ways.",
    image: "https://images.news18.com/ibnlive/uploads/2024/10/ele-duo-water-cropped-2024-10-d546227a889acea21879fc4e3f335c63-16x9.jpg?impolicy=website&width=640&height=360?height=600&width=800",
    link: "https://www.news18.com/lifestyle/lessons-from-the-wild-how-animal-and-human-behaviour-are-interlinked-9100929.html",
  },
  {
    id: 10,
    title: "An Ode To The Beauty And Magnificence Of The Western Ghats",
    publication: "Outlook Traveller",
    date: "Nov 2024",
    excerpt: "Wildlife photographer Sanket Reddy details his close relationship with the sights, sounds and wildlife of the Western Ghats in this personal essay for Outlook Traveller",
    image: "https://media.assettype.com/outlooktraveller%2F2024-11-09%2F6mbenvc6%2Fshutterstock2112812783.jpg?rect=0%2C0%2C4410%2C2481&w=1024&auto=format%2Ccompress&fit=max/?height=600&width=800",
    link: "https://www.outlooktraveller.com/experiences/nature/an-ode-to-the-beauty-and-magnificence-of-the-western-ghats ",
  },
  {
    id: 11,
    title: "The Ethics of Wildlife Photography: Respecting Nature While Capturing Its Beauty",
    publication: "Native Planet - One India",
    date: "Nov 2024",
    excerpt: "Wildlife photography is more than an artistic pursuit; it is a responsibility to capture the wonders of nature without disturbing them. Ethical practices in wildlife photography revolve around respecting the subjects, safeguarding habitats, and preserving the delicate balance of ecosystems.",
    image: "https://images.nativeplanet.com/webp/img/2024/11/vaalparai-13-1731322826.jpg/?height=600&width=800",
    link: "https://www.nativeplanet.com/travel-guide/the-ethics-of-wildlife-photography-respecting-nature-while-capturing-its-beauty-014321.html ",
  },
  {
    id: 12,
    title: "Stories Of The Wild: Getting Up Close And Personal With Bears, Foxes, Penguins And Elephants",
    publication: "Outlook Traveller",
    date: "Dec 2024",
    excerpt: "In this exclusive essay, wildlife photographer Sanket Reddy documents how his encounters with wild animals have left him grateful, humbled and deeply engaged with the more-than-human world",
    image: "https://media.assettype.com/outlooktraveller%2F2024-11-29%2F1qapi1dx%2FRock-Hopper-Wide-head-Onn.JPG?w=1024&auto=format%2Ccompress&fit=max/?height=600&width=800",
    link: "https://www.outlooktraveller.com/experiences/nature/stories-of-the-wild-getting-up-close-and-personal-with-bears-foxes-penguins-and-elephants",
  },
  {
    id: 13,
    title: "Capturing the Wild: How Wildlife Photography Raises Awareness for Conservation Efforts ",
    publication: "Native Planet",
    date: "Dec 2024",
    excerpt: "Wildlife photography has reached unmatched heights this decade, driven by a surge in both aspiring photographers and the accessibility of wildlife content on social media. While it's difficult to pinpoint whether this frenzy is fuelled by social media or a genuine love for nature, the effects-both positive and negative-are undeniable.",
    image: "https://images.nativeplanet.com/webp/img/2024/12/wildlife-112-1733223446.jpg/?height=600&width=800",
    link: "https://www.nativeplanet.com/travel-guide/capturing-the-wild-how-wildlife-photography-raises-awareness-for-conservation-efforts-014597.html",
  },
  {
    id: 14,
    title: "‘The Forest Has Changed How I See Myself’: A Wildlife Photographer Reflects on 15 Years in the Wild",
    publication: "The Better India",
    date: "May 2025",
    excerpt: "From earning the trust of wild animals to learning from forest-dwelling tribes, Sanket Reddy shares how the wild reshaped his life — and why it could change yours too.",
    image: "https://en-media.thebetterindia.com/uploads/2025/05/TBI-featured-image-2025-05-16T203856.680_11zon-1747408185.jpg?height=600&width=800",
    link: "https://thebetterindia.com/432674/wildlife-photographer-sanket-reddy-lessons-nature/",
  },
]

// Sort media coverage by date (most recent first)
const sortedMediaCoverage = mediaCoverage.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

// Sample podcast data
const podcastData = [
  {
    id: 1,
    title: "Sanket Reddy Podcast",
    description: "For Bengaluru-based Sanket Reddy, wildlife photography is not just a passion but a medium of his expression. During a fun chat with Indulge, he talks about precautions one has to take while heading out to capture shots in the wild, his learning as a wildlife photographer and much more!",
    videoLink: "https://www.youtube.com/embed/UEblNpZEeEE", // Replace with actual video link
  },
  
  // Add more podcast entries as needed
]

// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    publication: "The Times of India—Times Travel",
    description: "10-beautiful pictures of animals from national parks across india",
    link: "https://timesofindia.indiatimes.com/travel/web-stories/10-beautiful-pictures-of-animals-from-national-parks-across-india/photostory/112678815.cms",
  },
  {
    id: 2,
    publication: "Money Control",
    description: "9 Majestic Birds Caught Mid - Flight: A Photographer's Dream",
    link: "https://www.moneycontrol.com/science/9-majestic-birds-caught-mid-flight-a-photographers-dream-visual-story-2436805.html ",
  },
  {
    id: 3,
    publication: "Indulge - YouTube",
    description: "Wildlife photographer Sanket Reddy on his work and what makes it so exciting...",
    link: "https://www.youtube.com/watch?v=UEblNpZEeEE ",
  },
  {
    id: 4,
    publication: "Indulge - Spotify ",
    description: "Wildlife photographer Sanket Reddy on his work and what makes it so exciting...",
    link: "https://open.spotify.com/episode/6fjiyFAW3YIyBrWc1HLXNz?si=hYd7g_nWSb64hpcvXnDGfg",
  },
  {
    id: 5,
    publication: "LBB Bangalore",
    description: "Favourite things of Sanket Reddy Wildlife Photographer",
    link: "https://www.instagram.com/p/C-4djjStZ14/?igsh=MjB2ZWU5NmY4ZWc%3D&img_index=3 ",
  },
  {
    id: 6,
    publication: "MSN",
    description: "How can wildlife photography raise awareness of conservation efforts?",
    link: "https://www.msn.com/en-in/news/India/how-can-wildlife-photography-raise-awareness-of-conservation-efforts/ar-AA1sLHn7",
  },
  {
    id: 7,
    publication: "Outlook India",
    description: "An Ode To The Beauty And Magnificence Of The Western Ghats ",
    link: "https://www.outlookindia.com/traveller/an-ode-to-the-beauty-and-magnificence-of-the-western-ghats ",
  },
  {
    id: 8,
    publication: "Outlook India",
    description: "Stories Of The Wild: Getting Up Close And Personal With Bears, Foxes, Penguins And Elephants",
    link: "https://www.outlookindia.com/traveller/stories-of-the-wild-getting-up-close-and-personal-with-bears-foxes-penguins-and-elephants ",
  },
  // Add more testimonials as needed
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

// Sample outreach program data
const outreachPrograms = [
  {
    id: 1,
    title: "Wildlife Conservation Workshop",
    description: "Join our hands-on workshop to learn about wildlife conservation and photography techniques in the Western Ghats.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "https://www.example.com/workshop",
  },
  {
    id: 2,
    title: "School Outreach Program",
    description: "Educational sessions for schools to raise awareness about wildlife conservation and environmental protection.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "https://www.example.com/school-program",
  },
  {
    id: 3,
    title: "Community Conservation Initiative",
    description: "Working with local communities to promote sustainable wildlife tourism and conservation practices.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "https://www.example.com/community-initiative",
  }
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
            Media coverage,Podcasts, print orders, and licensing options
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
              onClick={() => setActiveTab("podcasts")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                activeTab === "podcasts" ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              Podcasts
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                activeTab === "testimonials" ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              Testimonials
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
            <button
              onClick={() => setActiveTab("Outreach")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                activeTab === "Outreach" ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              Outreach Program
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
              {sortedMediaCoverage.map((item, index) => (
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

      {/* Podcasts */}
      {activeTab === "podcasts" && (
        <section className="py-16 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Podcasts</h2>
              <p className="text-zinc-300 max-w-3xl text-center">
                Explore our podcast episodes where we discuss wildlife photography, conservation, and more.
              </p>
            </motion.div>

            <div className="space-y-12">
              {podcastData.map((podcast) => (
                <motion.div
                  key={podcast.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border-b border-zinc-800 pb-12"
                >
                  <h3 className="text-2xl font-bold mb-2">{podcast.title}</h3>
                  <p className="text-zinc-300 mb-4">{podcast.description}</p>
                  <iframe
                    width="100%"
                    height="315"
                    src={podcast.videoLink}
                    title={podcast.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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

      {/* Testimonials */}
      {activeTab === "testimonials" && (
        <section className="py-16 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
              <p className="text-zinc-300 max-w-3xl text-center">
                Here's what publications are saying about Sanket Reddy's work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border border-zinc-800 p-6 rounded-lg"
                >
                  <h3 className="text-2xl font-bold mb-2">{testimonial.publication}</h3>
                  <p className="text-zinc-300 mb-4">"{testimonial.description}"</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                  >
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      Read More <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
      )}

      {/* Outreach Program */}
      {activeTab === "Outreach" && (
        <section className="py-16 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Outreach Programs</h2>
              <p className="text-zinc-300 max-w-3xl text-center mx-auto">
                Join our various outreach programs designed to educate, inspire, and create awareness about wildlife conservation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {outreachPrograms.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-zinc-900 rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-zinc-300 mb-4">{program.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                    >
                      <a
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
