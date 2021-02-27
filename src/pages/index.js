import React, {useState} from 'react'
import SidebarSection from '../components/SidebarSection';
import NavbarSection from '../components/NavbarSection';
import HeaderSection from '../components/HeaderSection';
import SamplerSection from '../components/SamplerSection';



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
         
         
        </>
    );
};

export default Home