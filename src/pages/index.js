import React, {useState} from 'react'
import Footer from '../components/FooterSection';
import SidebarSection from '../components/SidebarSection';
import NavbarSection from '../components/NavbarSection';
import HeaderSection from '../components/HeaderSection';
import SamplerSection from '../components/SamplerSection';
import MainSection from '../components/MainSection';
import { homeObjOne } from '../components/MainSection/Data';




const Home = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
       setIsOpen(!isOpen)
   }

    return (
        <>
         <SidebarSection isOpen={isOpen} toggle={toggle}/>
         <NavbarSection toggle={toggle}/>
         <HeaderSection />
         <SamplerSection />
         <MainSection {...homeObjOne}/>
         <Footer />
         
         
        </>
    );
};

export default Home