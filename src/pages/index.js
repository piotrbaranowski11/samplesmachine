import React, {useState} from 'react'
import SidebarSection from '../components/SidebarSection';
import NavbarSection from '../components/NavbarSection';
import AboutSection from '../components/AboutSection';
import DiscoverSection from '../components/DiscoverSection';

const Home = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
       setIsOpen(!isOpen)
   }

    return (
        <>
         <SidebarSection isOpen={isOpen} toggle={toggle}/>
         <NavbarSection toggle={toggle}/>
         <AboutSection />
         <DiscoverSection />
        </>
    );
};

export default Home