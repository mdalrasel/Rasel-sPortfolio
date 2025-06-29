import { motion } from "framer-motion";
import "./CustomLogo.css"; 

const CustomLogo = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="animated-logo text-4xl font-extrabold"
    >
      &lt;R/&gt;
    </motion.h1>
  );
};

export default CustomLogo;
