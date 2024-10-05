import React, { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export const FormTwoNewField: FC<PropsWithChildren> = ({ children }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }
  return (
    <motion.div className="w-full" initial={false} variants={variants}>
      {children}
    </motion.div>
  )
}
