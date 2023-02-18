import React from "react"
import {BrowserRouter as Router, Route, Routes, Navigate,
} from "react-router-dom"
import "./styles/main.css"

//React BrowserRouter
import Home from "./pages/Home"
import About from "./pages/About"
import SingleProduct from "./pages/SingleProduct"
import PageNotFound from "./pages/PageNotFound"

//Fixed Component
import Banner from "./components/Banner"
import Footer from "./components/Footer"

function App() {
    return (
      <div>
        <div className="App">
          <Router>
            <Banner />
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products/:productId" element={<SingleProduct />} />
              <Route path="/kaza" element={<Navigate to="/" replace />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    ); 
}

export default App