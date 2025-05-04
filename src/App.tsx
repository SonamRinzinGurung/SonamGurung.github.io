import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blogs from "./pages/Blogs/Blogs";
import Blog1 from "./pages/Blogs/Blog1";
import Blog2 from "./pages/Blogs/Blog2"
import Projects from "./pages/Projects";
function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/moving-to-us" element={<Blog1 />} />
        <Route path="blogs/adapting-to-life-abroad" element={<Blog2 />} />

      </Route>
    </Routes>

  )
}

export default App
