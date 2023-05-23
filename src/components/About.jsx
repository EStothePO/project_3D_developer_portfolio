import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Biography</p>
        <h2 className={styles.sectionHeadText}>Who I am.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       On my web portfolio, you'll see the story of my journey from a high-school graduate to a multifaceted designer.
       After completing high school, I embarked on a career as an automotive technician, where I honed my skills in vehicle repair and maintenance.
       As time went on, I transitioned from being a mechanic to a CNC machinist, delving into the world of precision manufacturing. During my tenure 
       as a machinist, I was introduced to the captivating realm of product design. This exposure sparked a passion within me for creating 
       innovative, functional, and beautiful products. Driven by this newfound love, I made the bold decision to leave the workforce and return to academia,
       enrolling in a university to study Industrial Design.
       
       As an Industrial Design student, I have acquired a diverse set of software and creative skills that have significantly enhanced my design capabilities.
       Throughout my academic journey, I have become proficient in various essential tools and techniques that are vital in the world of design, 
       Including but not limited to:
       
       BluePrint Drafting and reading 
       AutoCAD
       Fusion 360
       Solidworks
       Keyshot
       Adobe Photoshop, Illustrator, various other Adobe Suite softwares
       ________ WEB DEVELOPING SKILLS SHOULD GO HERE

       These software and creative skills, acquired during my time as an Industrial Design student, have equipped me with a comprehensive toolkit to tackle 
       a wide range of design challenges and contribute meaningfully to the field of product design and development.
       Throughout my educational journey, I was able to seamlessly blend my technical expertise from my previous roles with my newly acquired creative abilities. 
       This unique combination of skills has allowed me to evolve into the versatile designer I am today. Now, I am eager to apply my diverse skill set to tackle
       new challenges and create meaningful, impactful designs that resonate with people and improve their everyday lives. 
       I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
       Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
