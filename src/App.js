import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
