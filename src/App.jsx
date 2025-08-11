
// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import Services1 from './pages/Services1'
import About from './pages/AboutPage'
import OM from './pages/O&M'
import CurrentPage from './pages/CurrentPage'
import ScrollToTop from './components/ScrollToTop'
import EpcPage from './pages/EpcPage'
import MediaAndBlog from './pages/MediaAndBlog'
import HeadlinesPage from './pages/HeadlinesPage'
import BlogPage from './pages/BlogPage'
import VideoPage from './pages/VideoPage'
import SustainbilityPage from './pages/SustainbilityPage'
import ContactPage from './pages/ContactPage'
import BlogTextPage from './pages/BlogTextPage'
import MediaHiglight from './pages/MediaHiglight'
import Comeing from './pages/Comeing'
import Loader from "./components/Loader";

import NotFound from './pages/NotFound';
import { FaArrowUp } from 'react-icons/fa';
import ReactScrollToTop from "react-scroll-to-top";

import React, { useState, useEffect } from 'react';


function App() {




// const [loading, setLoading] = useState(true); 

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000); 
//     return () => clearTimeout(timer);
//   }, []);

//   console.log("aquib");
//   if (loading) return <Loader />; 








  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/solar-rooftop' element={<Services1 />} />
        <Route path='/about' element={<About />} />
        <Route path='/operation-and-maintenance' element={<OM />} />
        <Route path='/career' element={<CurrentPage />} />
        <Route path='/epc-development' element={<EpcPage />} />
        <Route path='/news-media' element={<MediaAndBlog />} />
        <Route path='/media-headlines' element={<HeadlinesPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/video' element={<VideoPage />} />
        <Route path='/sustainbility' element={<SustainbilityPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog-insights' element={<BlogTextPage />} />
        <Route path='/media-higlight' element={<MediaHiglight />} />
         <Route path='/coming-soon' element={<Comeing />} />
<Route path="*" element={<NotFound />} />

      </Routes>
<ReactScrollToTop smooth top={300}
  component={<FaArrowUp />}
  style={{
    backgroundColor: '#DAB369',
    color: 'white',
    borderRadius: '50%',
    padding: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    right: '20px',
    bottom: '20px',
    zIndex: 1000
  }}/>
      
    </>
  )
}

export default App