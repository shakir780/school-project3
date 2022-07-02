import React ,{useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
import './AboutUs.css'

const AboutUs = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
            },)
  return <div className="AboutAcu">
    <div className="AboutAcu__header-img">
    <img src="https://acu.edu.eg/web/image/1130-0667a8d9/ACUlogo%20copy3.gif" alt="" srcset="" />
    </div>
    <div className="Aboutus__header">
        
        <div className="Aboutus__header-img">
            <img src="https://acu.edu.eg/web/image/1147-5fde000e/99293315_3101794769880660_1738776501437857792_o.jpg" alt="" />
        </div>
       
    </div>
    <div className="Aboutus__container">
        <div className="Aboutus__history">
            <div data-aos="fade-right" className="Aboutus__info">
            <h1>A Proud History</h1>
            <p>Since 1876, Al Ahram Establishment has been the main leader in the Egyptian media and is one of the oldest Arab establishments in journalism and mass communication.  In 2005, Al-Ahram Establishment started a new landmark in Egypt, ACU, under the Presidential Decree No. 393 (2004), and operates as a non-profit accredited educational institution as per law No. 12 (2009).</p>
            </div>
            
          
         <div data-aos="fade-left" className="Aboutus__historyImage">
            <img src="https://www.topuniversitiesegypt.com/ImageHandler.ashx?Id=12605&SS=f2f546590a91e74d29ff6e419985ac0f" alt="" />
         </div>
        </div>
        <div   className="AboutUS__UniversityVission Aboutus__history">
            <div data-aos="fade-right" className="AboutUs__UnicerityVission__info Aboutus__info">
            <h1>University Vission</h1>
            <p>ACU aspires to become a distinguished leading institute that provides quality education and state of the art research. We aim at preparing unique graduates that are able to meet labor market demands and provide significant contribution to the community development in a progressively complex world.</p>
            </div>
          
            <div data-aos="fade-left"  className="Aboutus__historyImage">
            <img src="https://fieldedge.com/wp-content/uploads/2020/12/businessman-hand-holding-wooden-building-blocks-scaled.jpg" alt="" />
         </div>
        </div>
        <div className="AboutUs__UniversityMission Aboutus__history">
            <div data-aos="fade-right" className="AboutUs__UniversityMission__info Aboutus__info">
            <h1>Univerity Mission</h1>
            <h5>We are an educational and professional institute that provides excellent teaching, research, and community service. We prepare well educated and motivated  graduates who are able to serve their community and contribute to the enhancement of society by:</h5>
        <li>1- Recruiting and retaining outstanding faculty and staff that reflect our expectation of excellence;</li>
        <li>2- Providing a supportive learning environment that fosters integrity, creativity and self-development;</li>
        <li>3- Establishing innovative programs that meet the needs of students and society;</li>
        <li>4- Continuously implementing new developments in classroom design and equipment </li>
        <li>5- Ensuring that our practices, policies and procedures encourage sustainable development.</li>
        <li>6- Conducting creative research in cooperation with both regional and international organizations.</li>
            </div>
          
        <div data-aos="fade-left" className="Aboutus__historyImage">
            <img src="https://www.geu.ac.in/content/dam/geu/about/the-university/mission.png" alt="" />
         </div>
        </div>

    </div>
  </div>;
};

export default AboutUs;
