import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/components/Layout'
import Home from '/pages/Home'
import About from '/pages/About'
import Shampoos from '/pages/Shampoos'
import ShampooDetails from '/pages/ShampooDetails'
import NotFound from '/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shampoos" element={<Shampoos />} />
          <Route path="shampoo/:id" element={<ShampooDetails />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

//Rose freepik
//<a href="https://www.freepik.com/free-vector/red-rose-flower_13446428.htm#fromView=search&page=1&position=1&uuid=8f87a1ec-b882-4862-b218-c3fc01c26178">Image by inksyndromeartwork on Freepik</a>