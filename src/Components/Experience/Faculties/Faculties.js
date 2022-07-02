import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import './Faculties.css'
const Faculties = () => {
    useEffect(()=>{
Aos.init({duration: 2000})
    },)
  return (
    <>
    <div className="faculties">
   <div className="faculty__pharmacy">
    <div className="faculty__pharmacy-container">
        <div className="faculty__pharmacy-title">
            <h1>     Faculty of Pharmarcy</h1>
       
        </div>
        <div className="faculty__info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1471-de72f5c8/1.png" alt="" />
            </div>
        <p>ACU’s Faculty of Pharmacy is proudly in collaboration with Alberta University; one of Canada's largest research-intensive universities, allowing for faculty/student exchanges, and joint research and degree studies. The curriculum, which is also developed in accordance with the Canadian Standards of Higher Education, is designed to equip pharmacy graduates with a strong and unique academic base that balances both, application and theory.</p> 
        </div>
    </div>
    <div data-aos="fade-up" className="facultyMission">
        <div className="FacultyMission-header">
           <h1>Faculty Mision</h1>
        </div>
        <div data-aos="fade-left" className="FacultyMission-info">
            <p>The Faculty of Pharmacy at Ahram Canadian University offers an  advanced educational program to graduate knowledgeable and proficient 

pharmacists who are able to compete at the local and regiona l levels, conduct pharmacy-related research and serve their local communities. 
All of this within the context of the community’s general and professional values.</p>
        </div>
    </div>
    <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Faculty Vision</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
         <p>The Faculty of Pharmacy at Ahram Canadian University aspires to be  a pre-eminent center for pharmacy education and research in order  to graduate distinct pharmacy cadres capable of serving the local and  regional communities.</p>
        </div>
    </div>
    <div className="facultyDperatments facultyMission">
        <div data-aos="fade-up" className="facultyDepartments-header FacultyMission-header">
            <h1>Faculty Departments</h1>
        </div>
        <div data-aos="fade-left" className="facultyDepartments-info FacultyMission-info">
            <li>1. Department of Biochemistry (PBC).</li>
            <li>2. Department of Pharmacognosy (PCG).</li>
            <li>3. Department of Pharmacology (PCL).</li>
            <li>4. Department of Clinical Pharmacy & pharmacy practice (PCP).</li>
            <li>5. Department of Pharmaceutical Chemistry (PCS).</li>
            <li>6. Department of Pharmaceutics (PCT).</li>
            <li>7. Department of Microbiology (PMB).</li>
        </div>
    </div>
   </div>


<div className="faculty__Engineer">
    <div className="faculty__Engineer-container faculty__pharmacy-container">
        <div data-aos="fade-right" className="faculty__Engineer-title faculty__pharmacy-title">
            <h1>     Faculty of Engineering</h1>
       
        </div>
        <div data-aos="fade-left" className="faculty__info faculy__engineering-info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1794-1832af1e/5.png" alt="" />
            </div>
        <p>The Faculty of Engineering, Ahram Canadian University, offers a professional program leading to the degree of Bachelor of Science in Engineering and carries out academic and scientific research in Engineering and Technology.  </p> 
        </div>
    </div>
    <div className="facultyMission">
        <div data-aos="fade-up" className="FacultyMission-header">
           <h1>Faculty Mision</h1>
        </div>
        <div data-aos="fade-left" className="FacultyMission-info">
            <p>ACU Faculty of Engineering will be a leading institution that provides excellent teaching, research and community service through:</p>
          <li>1- Recruitment of distinguished faculty that can add to the educational process and provide top line knowledge to the students.</li>
          <li>2- Equipping our students with diverse basic and applied skills that enhance their learning ability and train them for practical life.</li>
          <li>3- Fostering student interaction with the faculty and fellow students to promote self and continuous education to develop their intellect and personalities.</li>
          <li>4- Supporting scientific research and conferences that have a direct impact on the community.</li>
          <li>5- Hosting different community oriented events to bond our students to their community and equip them well to help improve it.</li> <br />
         <p>Our graduates are well educated and self-motivated. While our graduates can compete effectively at the consciously demanding and changing job market they yet best serve their society</p>
        </div>
    </div>
    <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Cores Values</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
         <li>1- Academic integrity.</li>
         <li>2- Equality.</li>
         <li>3- Fairness.</li>
         <li>4- Excellence.</li>

         <p>In striving to fulfill this mission, the Faculty of Engineering  at ACU is dedicated to prepare competent graduates from the undergraduate program who:</p>
          <li>a- Demonstrate confidence in their abilities to take responsibility for their role in optimizing the technological development of the society.</li>
          <li>b- Demonstrate the practical and professional application of knowledge, skills and attitudes.</li>
          <li>c- Are critical and scientific thinkers.</li>
          <li>d- Demonstrate professionalism in the values, ethics and attitudes reflected in their practice.</li>
          <li>e- Demonstrate skills and processes of active long-life learners.</li>
          <br />
          <li>5- Collaborate with the profession to enhance the continuing competence of engineering graduates.</li>
          <li>6- Work with all stake-holders to proactively influence health care system innovation, change and reform to optimize the health status of the society.</li>
          <li>7- Encourage collaborative models of research that support the strategic direction of the Faculty.</li>
          <li>8- Implement transparent structure, systems and processes to manage and support ongoing change in both internal and external environments, including regular evaluation and feedback from stake-holders on the achievement of the faculty mission.</li>
        </div>
    </div>
    <div className="facultyDperatments facultyMission">
        <div data-aos="fade-up" className="facultyDepartments-header FacultyMission-header">
            <h1>Strategic Goals</h1>
        </div>
        <div data-aos="fade-left" className="facultyDepartments-info FacultyMission-info">
            <li>1- The Faculty will strive to meet current needs for Engineering  education thereby contributing to community needs and confirming its standing as one of Egypt’s leading centers of Engineering education.</li>
            <li>2- The Faculty will pursue excellence in all aspects of teaching and learning to deliver a dynamic curriculum which relates to the engineering and technological needs of society. The Faculty will maintain appropriate student numbers in its program, attract and retain the highest quality students, diversify selection criteria to allow entry of students with a range of appropriate educational backgrounds.</li>
            <li>3- The Faculty will maintain high international standard research and scholarship; facilitate the communication, application and dissemination of the results of university research for the benefit of the national, regional and international community.</li>
            <li>4- The Faculty will achieve the highest possible standards in  professional services, thereby providing distinguished community technological services.</li>
           
           
           
        

        </div>
    </div>
    <div className="facultyObjectives facultyMission ">
    <div data-aos="fade-up" className="facultyObjectives-header FacultyMission-header">
            <h1>Faculty Objectives</h1>
        </div>
        <div data-aos="fade-left" className="facultyObjectives-info FacultyMission-info">
            <li>1- Equip engineering graduates with a variety of basic and applied skills in sciences; engineering practice and project management, also to train them to properly implement their knowledge , accordance with the standards of national and international standard for quality and accreditation (NARS). This enhances their learning opportunities allowing them to compete on the national, regional and international level, in promoting, improving, and developing various engineering concepts.</li>
            <li>2- Introduce a diversified, project-oriented educational system that eventually will furnish the community with distinguished engineering graduates, having intellectual creativity and capable of satisfying the job market needs.</li>
            <li>3- Encourage student interaction within the educational system. This ultimately leads to initiation of self- learning strategies which enables the student to search for the latest advancements in fields of study even after graduation.</li>
            <li>4- Build student/Prof communication skills; through verbal or written practice, during the undergraduate studies. This exposes the student to proper professional behavior expected from the engineers.</li>
            <li>5- Support scientific research, studies and experimental investigations in the wide range of specializations that have a direct impact on the community technical services and construct individual research units for different fields of engineering.</li>
             <li>6- Provide consultancy and scientific/technical support to engineering institutions and organizations.</li>
             <li>7- Arrange seminars and scientific conferences; this would help sustain advanced engineering education, deepen scientific comprehension and facilitate interactions with various specialized study groups.</li>
             <li>8- Promote and maintain means for publication of research papers in the diverse fields of engineering.</li>
           
        

        </div>
    </div>

   </div>

      <div className="facultyofDental">
      <div className="FacultyofDental__container faculty__pharmacy-container">
        <div data-aos="fade-right" className="FaultyOfDetal-title faculty__pharmacy-title">
            <h1>Faculty of Oral & Dental Medicine</h1>
        </div>
        <div data-aos="fade-left"  className="faculty__info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1790-c3999d6c/6%2B.png" alt="" />
            </div>
        <p>The curriculum of Faculty of Oral & Dental Medicine has been conceived to help the student to develop and improve his/her clinical skills with sound medical background. It is tailored to meet the oral and dental health needs of the community, focusing on the prevention of the oral and dental diseases where careful integration of knowledge based on biomedical foundation is developed through the study program .</p> 
        </div>
    </div>

    <div className="facultyMission">
        <div data-aos="fade-up" className="FacultyMission-header">
           <h1>Faculty Mision</h1>
        </div>
        <div data-aos="fade-left" className="FacultyMission-info">
            <p>The mission of the Faculty of Oral & Dental Medicine is to achieve excellence in the art and science of dentistry through teaching, research, and community service through:</p>
          <li>1- Recruitment of distinguished faculty that can add to the educational process and provide top line knowledge to the students.</li>
          <li>2- Equipping our students with diverse basic and applied skills that enhance their learning ability and train them for practical life.</li>
          <li>3- Fostering student interaction with the faculty and fellow students to promote self and continuous education to develop their intellect and personalities.</li>
          <li>4- Supporting scientific research and conferences that have a direct impact on the community.</li>
          <li>5- Hosting different community oriented events to bond our students to their community and equip them well to help improve it.</li> <br />
         <p>Our graduates are well educated and self-motivated. While our graduates can compete effectively at the consciously demanding and changing job market they yet best serve their society</p>
        </div>
        
    </div>
    <div className="facultyObjectives facultyMission ">
    <div data-aos="fade-up" className="facultyObjectives-header FacultyMission-header">
            <h1>Is this program for me? </h1>
        </div>
        <div data-aos="fade-left" className="facultyObjectives-info FacultyMission-info">
            <p>This degree is for students who might wish to pursue careers in the health-care industry.  Job opportunities may be found in the following areas:</p>
            <li>1- ACU is the only private university in Egypt that adopts a policy helping students acquires high paying jobs as soon as they graduate.</li>
            <li>2- Promising career opportunities awaiting ACU graduates in the local, national and multinational corporations.</li>
        </div>
    </div>
      </div>
      <div className="facultyOfPhysicalTherapy">
      <div data-aos="fade-right" className="facultyOfPhysicalTherapy__container faculty__pharmacy-container">
        <div className="facultyOfPhysicalTherapy-title faculty__pharmacy-title">
            <h1>Faculty of Physical Therapy</h1>
        </div>
        <div data-aos="fade-left" className="faculty__info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1792-8356f671/7.png" alt="" />
            </div>
        <p>prepares graduates characterized by remarkable scientific level in accordance to the high ethical and professional standards through outstanding educational programs and innovative scientific research to serve the community and to expand the scientific applications in order to acquire further professional skills.</p> 
        </div>
    </div>
    <div  className="facultyMission">
        <div data-aos="fade-up" className="FacultyMission-header">
           <h1>Mission Statement</h1>
        </div>
        <div data-aos="fade-left" className="FacultyMission-info">
            <p>The mission of the faculty emanates from the mission of Ahram Canadian University as well as, the educational duties performed by the Faculty are considered an extension to the duties of University regarding the aspects of education, research application, serving the environment and developing the community. The education duties performed by the Faculty are premised on the following regulations:</p>
          <li>1-Supporting the main education policy through adhering to a high level of quality regarding the fields of education, scientific research and consultancies, moreover, insisting on achieving outstanding quality level in the educational services presented by the academic faculty members and assistants to the community.</li>
          <li>2-Providing the students with the suitable environment of the academic freedom that allows the exchange of ideas, innovation and knowledge spreading in different scientific fields, as well as, providing the powerful scientific and technical foundation for the students to help them to excel and to prosper the Physical Therapy profession.</li>
          <li>3-Adhering to well prepare the graduates of the faculty to have the abilities of creative thinking skills and the abilities of developing cognitive skills through the available modern science, also to catch up with the successive developments in the professional field in a rapidly changing world.</li>
          <li>4-Preparing the graduates of the faculty to have the ability to benefit from the successive and modern innovations and information besides paying attention to the interdisciplinary majors.</li>
          <li>5-Encouraging graduates to have enough flexibility to deal with the problems and the unusual situations that may face them while working and to be well trained while studying in the university.</li>
          <li>6-Using the views of the external examiners as a separated panel to evaluate the educational programs to develop the exams and to assess the academic level of the students.</li>
          <li>7-Benefitting from the regular evaluation for all the elements of the educational process and countering any negatives that may hinder the student’s full benefitting from what is presented to him/her or from what is assigned to him/her of studies, research and practical projects.</li>
        </div>
        
    </div>
    <div className="facultyObjectives facultyMission ">
    <div data-aos="fade-up" className="facultyObjectives-header FacultyMission-header">
            <h1>Faculty Departments</h1>
        </div>
        <div data-aos="fade-left" className="facultyDepartments-info FacultyMission-info">
            <p>The Faculty of Physical Therapy in Ahram Canadian University includes 5 scientific departments.</p>
            <li><h3>1- Basic Sciences Department:</h3></li>
            <h3>It includes the following units:</h3>
            <li>1.Unit of Medical and Physical Sciences</li>
            <li>2.Unit of Human Science</li>
            <li>3.Unit of Physical Therapy Sciences</li>
            <li>4.Unit of Biomechanics</li>
             <li>5.Unit of Information Technology</li>
             <br />
             <li><h3>2- Department of Physical Therapy for Internal Medicine and Surgery</h3></li>
             <h3>it includes the following units:</h3>
             <li>1. Unit of Physical Therapy for Internal Medicine and Geriatrics</li>
             <li>2. Unit of Physical Therapy for Cardiovascular Pulmonary and Intensive care</li>
             <li>3. Unit of Cardiopulmonary Rehabilitation</li>
             <li>4. Unit of Physical Therapy for Surgery and Burn</li>
             <li>5. Unit of Integumentary Physical Therapy</li>
   <br />
             <li><h3>3- Department of Physical Therapy for Internal Medicine and Surgery</h3></li>
             <h3>Including the following units:</h3>
             <li>A-Unit of Physical Therapy for Orthopaedics and Orthopaedics Surgery</li>
             <li>B-Unit of Physical Therapy for Sport Injuries</li>
             <li>C-Unit of Orthoses and Prothetics</li>
         <br />
         <li><h3>4-Department of Physical Therapy for Neurology and Neurosurgery</h3></li>
         <h3>Including the following units:</h3>
         <li>A-Unit of Physical Therapy for Neurology and Neurosurgery</li>
         <li>B-Unit of Neurological Rehabilitation</li>

         <br />
         <li><h3>5 -Department of Physical Therapy for Paediatrics and Woman Health</h3></li>
         <h3>Including the following units:</h3>
         <li>A-Unit of Physical Therapy for Paediatrics and Paediatrics and Neurosurgery</li>
         <li>B-Unit of Paediatrics Rehabilitation</li>
         <li>C-Unit of Physical Therapy for Woman Health</li>
            
        

        </div>
    </div>
 <div className="facultyDesignAndArts">
 <div className="FacultyofDental__container faculty__pharmacy-container">
        <div data-aos="fade-right" className="FaultyOfDetal-title faculty__pharmacy-title">
            <h1>Faculty of Design & Creative Arts</h1>
        </div>
        <div data-aos="fade-left" className="faculty__info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1798-0f0a6525/9.png" alt="" />
            </div>
        <p>An outstanding Faculty of Art and Design of a premium quality, with a cutting-edge knowledge and technology to be up to par with the world. 

Our responsibility exceeds providing academic and scholarly meaningful experiences. It rather includes societal responsibility, environmental sustainability and economic enhancement for a better future.</p> 
        </div>
    </div>
    <div  className="facultyMission">
        <div data-aos="fade-up" className="FacultyMission-header">
           <h1>Faculty Mision</h1>
        </div>
        <div data-aos="fade-left" className="FacultyMission-info">
            <p>To prepare aspiring and creative artists and designers by providing an academic and research environment and outstanding educational programs in the fields of art and design to solve problems by creative methods and innovative ideas for the development of the local and regional community and improve the general sense of the environment.</p>
        </div>
        
    </div>
    <div className="facultyVision facultyMission">
        <div data-aos="fade-up"  className="facultyVision-header FacultyMission-header">
            <h1>Vision</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
        <p>To become the first choice for students in the field of art and design education, and contribute their graduates by creative and innovative ideas and apply the modern tools of technology in the development of the environment and the local community and regional.</p>
        </div>
    </div>

    <div className="facultyObjectives facultyMission">
        <div data-aos="fade-up"   className="facultyVision-header FacultyMission-header">
            <h1>Strategic Objectives</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
       <li>Provide a distinct academic and research environment.</li>
       <li> Provide educational programs according to local and international standards and meet the needs of the labor market.</li>
       <li> Orient scientific research to solve problems and develop the community.</li>
       <li>Enhance the role of the Faculty of Art and Design in the activities of community service..</li>
       <li>Holding partnerships with universities and educational institutions to exchange academic, research and community experiences.</li>
       <li>Develop creative and innovative skills and encourage students to conduct scientific research..</li>
       <li>Enhance cooperation with government and private sectors related to art and design.</li>
       <li> Provide postgraduate programs that meet the needs of the labor market.</li>
       <li>Develop a higher educational model in art and design and maximize the faculty’s role on the local, national and international levels.</li>
        </div>
    </div>



 </div>
 <div className="facultyBuisness">
 <div data-aos="fade-right" className="FacultyofBusiness__container faculty__pharmacy-container">
        <div className="FaultyOfBusiness-title faculty__pharmacy-title">
            <h1>School Of Business Administration</h1>
        </div>
        <div data-aos="fade-left" className="faculty__info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1801-fa0c306f/2.png" alt="" />
            </div>
        <p>SBA has earned a strong reputation as a center for academic excellence and innovation.  With unique partnerships that allows for an international dimension to be added in the curriculum, via student/school exchange, and joint research and degree studies, SBA graduates will be able to form a well-rounded academic base that enables them to become global leaders in the marketplace.</p> 
        </div>
        </div>
        <div  className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>SBA Vision</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
        <p>School of Business Administration SBA at Ahram Canadian University seeks to be one of the top faculties locally and regionally in the field of administrative sciences. It also seeks to encourage scientific research and to develop community continuously.</p>
        </div>
    </div>
        <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>SBA Mission</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
        <p>School of Business Administration in Ahram Canadian University is committed to preparing a distinguished graduate on both the scientific and professional levels to provide the needs of the national and international business environment in their respective specialization. It also seeks to develop educational, scientific research programs and administrative and technological systems to cope with the new era for sustainable development and enhancing its competitive position.</p>
        </div>
    </div>
        <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Is this program for me?</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
        <p>This degree is for students who might wish to pursue careers in a variety of settings, including business, government, and nonprofit.  Job opportunities may involve work in the following areas: </p>
        <li>1- Entry-level manager</li>
        <li>2- Human resources specialist</li>
        <li>3- Assistant product manager</li>
        <li>4- Market researcher</li>
        <li>5- Systems analyst</li>
        <li>6- Financial analyst</li>
        <li>7- Tax Accountant</li>
        <li>8- Accountant</li>
        <li>9- HR Supervisor</li>
        <li>10- Investment Banker</li>
        <li>11- Marketing Specialist</li>
        <li>12- Corporate/Strategic development</li>
        <li>13- Executive Secretary & HR Admin</li>
        <li>14- Broker</li>
        <li>15- Recruiter</li>
        <li>14- Marketing analysis</li>
        
        </div>
    </div>
        <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Choice and Flexibility</h1>
        </div>
        <div data-aos="fade-left" className="FacultyVision-info FacultyMission-info">
       <p>SBA has four department majors available</p>
       <li>1- Financial Economics</li>
       <li>2- Marketing  </li>
       <li>3- Human Resources and Management </li>
       <li>4- Accounting </li>
       <p>Students are highly flexible in customizing their studies by selecting certain concentrations of courses in subdisciplines, in order to include a minor.</p>
        </div>
    </div>
   
 </div>
 <div className="faculty-of-mass-communication">
 <div  className="faculty-of-mass-communication faculty__pharmacy-container">
        <div data-aos="fade-right" className="faculty-of-mass-communication-title faculty__pharmacy-title">
            <h1>Faculty of Mass Communication</h1>
        </div>
        <div data-aos="fade-left" className="faculty__info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1804-c06ab8b1/3.png" alt="" />
            </div>
        <p>Communication studies at ACU stress the balance between theoretical and practical skills. The philosophy of this four-year program is based on the belief that mass media specialists need excellent skills as well as a superior academic background to join the work force immediately upon graduation, and play a constructive role in public life. 

The FMC students take a strong core of courses to help them develop important skills and competencies necessary to work successfully in a highly complex and competitive media world.</p> 
        </div>
        </div>
 </div>
 <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Faculty mission</h1>
        </div>
        <div data-aos="fade-left" className="Facultymission-info FacultyMission-info">
       <p>The faculty aims at graduating qualified students in the different media fields and preparing them scientifically, professionally and technologically to be able to meet the market needs and the needs of competition locally and internationally through raising the level of the social, professional and moral responsibility towards the nation and society issues.    

</p>
      
        </div>
    </div>

    <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Choice and Flexibility</h1>
        </div>
        <div data-aos="fade-left" className="Facultymission-info FacultyMission-info">
       <p>Faculty of Mass Communication has four department majors and minors available in English Section:    

</p>
<li>1- Journalism </li>
<li>2- Advertising & Public Relations </li>
<li>3- Radio and Television </li>
<li>4- Visual Communication</li>

<p>Students are highly flexible in customizing their studies by selecting a minor from one of the other four majors. 

Faculty of Mass Communication has 1 department major (Journalism) and 2 minors (Advertising & Public Relations – Radio and Television) available in Arabic Section. </p>
      
        </div>
    </div>
    <div className="facultyOfLanguage">
    <div className="facultyOfLanguage faculty__pharmacy-container">
        <div data-aos="fade-right" className="facultyOfLanguage-title faculty__pharmacy-title">
            <h1>Faculty of Languages & Translation</h1>
        </div>
        <div data-aos="fade-left" className="faculty__info">
            <div className="faculty-image">
 <img src="https://acu.edu.eg/web/image/1807-02583955/8.png" alt="" />
            </div>
      <p>The faculty of languages and translation departments are equipped with qualified staff members who have a wide expertise in teaching and in the practical field of translation. Our students deepen their knowledge via cutting-edge teaching and learning approaches which equip them with the necessary ethos to pursue a promising career at major domestic and international organizations.</p>
        </div>
        </div>
    </div>
    <div className="facultyVision facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Faculty vission</h1>
        </div>
        <div data-aos="fade-left" className="Facultymission-info FacultyMission-info">
       <p>The faculty of languages and translation aims at achieving distinction in the field of languages and translation, locally and internationally



</p>

      
        </div>
        
    </div>
    <div className="facultyMission facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>Faculty Mission</h1>
        </div>
        <div data-aos="fade-left" className="Facultymission-info FacultyMission-info">
       <p>he faculty of languages and translation is committed to offering distinguished and innovative academic program that go hand in hand with the criteria of the distinguished quality of education and the accreditation of academic programs to meet the demands of the work market and to secure the needs of the community



</p>

      
        </div>
        
    </div>
    <div className="facultyMission facultyMission">
        <div data-aos="fade-up" className="facultyVision-header FacultyMission-header">
            <h1>FacultyMajors</h1>
        </div>
        <div data-aos="fade-left" className="Facultymission-info FacultyMission-info">
     <li>1- English Major</li>
     <li>2- French Major</li>
     <li>3- Spanish Major</li>
     <li>4- German Major</li>
     <li>5- Chinese Major</li>
     <li>6- Japanese Major</li>
    



</div>

      
        </div>
        
    </div>

      
    </div>
   </>
  )
}

export default Faculties