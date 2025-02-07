import { animate } from "motion";
import { motion } from "motion/react";


const animations = {
  initial: {x: "-100%"},
  animate: {x: "0%"},
  exit: {x: "-100%"},
  transition: {type: "spring", stiffness: 10, damping: 50}
}

function AnimatedNav({children})
{
  return(

    <motion.nav variants={animations} initial="initial" animate="animate" exit="exit" transition="transition">
      {children}
    </motion.nav>

  )
}

export default AnimatedNav