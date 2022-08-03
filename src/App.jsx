import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
