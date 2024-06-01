import React from 'react';
import './App.css';
import IndexPage from './Pages/IndexPage/IndexPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurServices from './Pages/OurServices/OurServices';
import OurTeam from './Pages/OurTeam/OurTeam';
import Footer from './Components/Footer/Footer';
import Testimonials from './Pages/Testimonials/Testimonials';
import BlogList from './Pages/Blog/BlogPage';

const App = () => {
    return (
        <div className="App">
            <IndexPage/>
            <AboutUs/>
            <OurServices/>
            <OurTeam/>
            <Testimonials/>
            <BlogList/>
            <Footer/>
        </div>
    );
}

export default App;
