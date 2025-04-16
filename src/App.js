import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import GalleryPage from "./pages/GalleryPage"
import TNRTrustPage from "./pages/TNRTrustPage"
import MediaPage from "./pages/MediaPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import BlogPostPage from "./pages/BlogPostPage"
import "./index.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/tnr-trust" element={<TNRTrustPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  )
}

export default App
