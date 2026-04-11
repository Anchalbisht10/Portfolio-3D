import { motion } from "framer-motion";

import { styles } from "../styles";
// import CertificateButton from "./button/CertificationButton";


const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden`}>
      <div
  className={`absolute inset-0 top-[340px] max-w-7xl left-[190px] mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>


   <div className="max-w-[600px] ">
    <br></br>
  {/* <h1 className={`hidden sm:block ${styles.heroHeadText} text-white text-[48px]`}> */}
  <h1 className={`${styles.heroHeadText} text-white text-[36px] sm:text-[48px] `}>
    Hi, I'm <span className='text-[#915EFF]'>Anchal Bisht</span>
  </h1>

{/* <p className={`hidden sm:block ${styles.heroSubText} mt-2 text-white-100 text-[18px]`}> */}
<p className={`${styles.heroSubText} mt-2 text-white-100 text-[18px] hidden md:block`}>
 I am a recent Computer Science graduate and a passionate Full Stack Developer with a strong focus on building modern, scalable, 
 and user-friendly web applications using React and Node.js. I enjoy transforming ideas into real-world digital products, 
 including full-stack systems, responsive user interfaces, and efficient backend solutions.

  </p>
</div>

       
      </div>


{/* <CertificateButton link="/certificates/accenture.pdf" /> */}





<div className="absolute top-[170px] right-[200px] sm:right-[330opx]">

  <div className="p-2 rounded-2xl shadow-[0_0_25px_rgba(145,94,255,0.4)]">
    <img
      src="/logo.png"
      alt="Anchal"
      className="w-[350px] h-[400px] object-cover rounded-xl"
    />
  </div>
</div>



<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center sm:justify-center right-[470px] top-[785px]'>
        <a href='#about'>
          <div className='w-[50px] h-[80px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-4 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
