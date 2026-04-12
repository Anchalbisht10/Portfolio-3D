import { motion } from "framer-motion";

import { styles } from "../styles";
// import CertificateButton from "./button/CertificationButton";


const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden`}>
 <div
  className={`relative max-w-7xl mx-auto ${styles.paddingX} pt-24 min-h-screen flex flex-col md:flex-row items-center justify-between gap-10`}
>
  {/* LEFT SIDE */}
  <div className="flex flex-row items-start gap-5 flex-1">
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
      <div className="w-1 h-40 md:h-80 violet-gradient" />
    </div>

    <div className="max-w-[600px] text-left">
      <h1 className={`${styles.heroHeadText} text-white text-[36px] sm:text-[48px]`}>
        Hi, I'm <span className='text-[#915EFF]'>Anchal Bisht</span>
      </h1>

      <p className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] sm:text-[18px] block`}>
        I am a recent Computer Science graduate and a passionate Full Stack Developer with a strong focus on building modern, scalable,
        and user-friendly web applications using React and Node.js.
      </p>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex justify-center md:justify-end flex-1">
    <div className="p-2 rounded-2xl shadow-[0_0_25px_rgba(145,94,255,0.4)]">
      <img
        src="/logo.png"
        alt="Anchal"
        className="w-[220px] h-[280px] sm:w-[300px] sm:h-[360px] md:w-[350px] md:h-[400px] object-cover rounded-xl"
      />
    </div>
  </div>
</div>

{/* <CertificateButton link="/certificates/accenture.pdf" /> */}







<div className='absolute bottom-10 w-full flex justify-center items-center'>
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
