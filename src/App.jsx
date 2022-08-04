import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Profile from "./pages/Profile"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<HomePage/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
