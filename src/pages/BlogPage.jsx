import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MediaInquiry from '../components/media/MediaInquiry'
import Herosection from '../components/Headlines/Herosection'
import Headlines from '../components/Headlines/Headlines'
import BlogCard from '../components/blog/BlogCard'


const BlogPage = () => {
    return (
        <>
            <Header />
            <Herosection />
            <BlogCard/>
      
            <MediaInquiry />
            <Footer />
        </>
    )
}



export default BlogPage