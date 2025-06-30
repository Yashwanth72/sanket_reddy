import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GalleryPage from "./pages/GalleryPage";
import TNRTrustPage from "./pages/TNRTrustPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import FloatingIcons from "./components/FloatingIcons";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename="/sr">
      <FloatingIcons />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/tnr-trust" element={<TNRTrustPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;