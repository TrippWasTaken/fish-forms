/* eslint-disable tailwindcss/no-custom-classname */
import { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const Welcome: FC = () => {
  const stringToStagger = Array.from('welcome to Your Aquarium')

  const [onFinish, setOnfinish] = useState(false)

  const variants = {
    hidden: {
      opacity: 0,
      scale: 1.3
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  const displayType = (char: string) => {
    if (char === ' ') {
      return 'inline'
    }
    return 'inline-block'
  }
  return (
    <>
      <div className="relative text-[100px] font-black uppercase">
        <motion.span
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, ease: 'easeIn', duration: 0.1 }}
          onAnimationComplete={() => {
            setOnfinish(true)
          }}
        >
          {stringToStagger.map((char, idx) => (
            <motion.div
              className={`${displayType(char)} text-white`}
              style={{
                WebkitTextStroke: '2px #3b82f6'
              }}
              variants={variants}
              key={idx}
            >
              {char}
            </motion.div>
          ))}
        </motion.span>
        <AnimatePresence>
          {onFinish && (
            <motion.div
              className="absolute top-0 size-full bg-[url('/water.png')] bg-contain bg-clip-text bg-repeat-x text-transparent"
              initial={{ backgroundPositionY: 100 }}
              animate={{
                backgroundPositionY: 20,
                backgroundPositionX: '100%'
              }}
              transition={{
                backgroundPositionX: {
                  repeat: Infinity,
                  duration: 60,
                  repeatType: 'loop',
                  ease: 'linear'
                },
                backgroundPositionY: {
                  duration: 2,
                  ease: 'easeOut'
                }
              }}
            >
              welcome to Your Aquarium
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
