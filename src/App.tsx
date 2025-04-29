import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {

  return (
    <Routes>
      <Route path="portfolio" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>

  )
}

export default App
