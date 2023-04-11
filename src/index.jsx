import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Cards from './pages/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

// import from 'styled-components'


// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 20px;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Roboto', sans-serif;
//   }
// `
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />  } />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/fiche/:logName" element={<Cards />} />

      <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

