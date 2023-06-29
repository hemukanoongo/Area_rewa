import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import BlogGrid from './blog-components/blog-grid';
import CallToActionV1 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';

const BlogGridPage = () => {
    return <div>
        <Navbar />
        <BlogGrid />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogGridPage

