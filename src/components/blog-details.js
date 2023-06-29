import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';

const BlogDetailsPage = () => {
    return <div>
        <Navbar />
        <BlogDetails />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogDetailsPage

