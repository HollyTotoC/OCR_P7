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

  //App main display and routing logic
  //We redirect everything that is not defined as an existing route to the 404 page
    return (
      <div>
        <div className="App">
          <div className="page">
            <Router>
              <div className="page__content">
                <Banner />
                <Routes>
                  <Route index element={<Home />} /> 
                  <Route path="about" element={<About />} />
                  <Route path="products/:productId" element={<SingleProduct />} />
                  <Route path="404" element={<PageNotFound />} />
                  <Route path="*" element={<Navigate to="404" replace/>} />
                </Routes>
              </div>
            </Router>
          <Footer />
          </div>
        </div>
      </div>
    ); 
}

export default App