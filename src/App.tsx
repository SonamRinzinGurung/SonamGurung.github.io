import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>

  )
}

export default App
