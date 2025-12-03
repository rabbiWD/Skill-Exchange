
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Skills from './Skills';
import SkillCard from '../Components/SkillCard';
import slider1 from '../assets/technology.jpeg'
import slider2 from '../assets/design.jpeg'
import slider3 from '../assets/react.svg'
import slider4 from '../assets/music.jpeg'
import TopProvider from './TopProvider';
import HowWorks from './HowWorks';
import FeaturedProviders from './FeaturedProviders';

const Home = () => {
    const [skills, setSkills] = useState([])

    useEffect(()=>{
        fetch('/SkillData.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
        .catch(err=> console.log('Error loading skills', err));
    },[])
    return (
        <div className='bg-gradient-to-b from-indigo-50 via-white to-indigo-100 min-h-screen'>
            <Banner></Banner>
            <div className="carousel w-full h-[80vh] mt-10 rounded">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={slider1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={slider2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={slider3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src= {slider4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            <div className='text-center mt-9'>
                <Skills></Skills>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                   {
                    skills.length> 0 ?(
                        skills.map(skill=>(
                        <SkillCard key={skill.skillId} skill={skill}></SkillCard>
                    ))
                    ) : (
                        <p>Loading Skills...</p>
                    )
                   }
                </div>
            </div>
            
            <div>
               <TopProvider></TopProvider>
              <HowWorks></HowWorks>
              <FeaturedProviders></FeaturedProviders>
            </div>
        </div>
    );
};

export default Home;