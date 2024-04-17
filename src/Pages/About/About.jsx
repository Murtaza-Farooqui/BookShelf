import React from 'react';
import "./About.css";
import aboutImg from '../../Images/about.jpg';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookShelf is a community-driven discovery service that indexes and provides access to scholarly, peer-reviewed open access books and helps users to find trusted open access book publishers. All BookShelf services are free of charge and all data is freely available.</p>
            <p className='fs-17'>Users can browse and search for Open Access books from various publishers and providers, currently including all Knowledge Unlatched books, and with many more books and curations to follow during the coming months. The further development roadmap will be shaped through the input of a high profile board of publishers and librarians!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About