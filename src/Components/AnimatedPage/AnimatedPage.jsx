import { motion } from "motion/react"


const animations = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0}
}

function AnimatedPage({children})
{
  return(

    <motion.section variants={animations} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.section>

  )
}

export default AnimatedPage