import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        style={{
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 0,
        }}
      >
        <style>{`
          .section-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 40px;
            box-sizing: border-box;
            width: 100%;
          }
          @media (max-width: 768px) {
            .section-inner {
              padding: 40px 16px !important;
            }
          }
        `}</style>
        <span className='hash-span' id={idName}>&nbsp;</span>
        <div className="section-inner">
          <Component />
        </div>
      </motion.section>
    );
  };

export default StarWrapper;