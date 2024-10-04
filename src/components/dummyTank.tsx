import { FC, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  createdOn: string
  name: string
  fishNames: string[]
}

export const DummyTank: FC<Props> = ({ createdOn, name, fishNames }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div
      className="relative size-full overflow-hidden rounded-3xl bg-white shadow-lg"
      whileHover={{
        scale: 1.1,
        zIndex: 40
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        className="absolute left-1/2 top-1/2 z-30 size-[90%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-black/50 p-5 shadow-2xl backdrop-blur-sm"
      >
        <div className="flex w-full flex-col text-nowrap text-2xl text-white">
          <div>
            This tank was created on{' '}
            <span className="font-bold">{createdOn}</span>
          </div>
          <div>
            It has <span className="font-bold">{fishNames.length}</span> fish
          </div>
          <div>
            <div className="flex flex-col">
              {fishNames.map((fish, i) => (
                <span className="" key={i}>
                  {fish}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className=" absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-nowrap text-3xl font-bold text-white">
        {name}
      </div>
      <motion.div
        className="absolute bottom-0 size-full scale-150 bg-[url('/water.png')] bg-contain bg-repeat-x"
        animate={{
          backgroundPositionX: '100%'
        }}
        transition={{
          backgroundPositionX: {
            repeat: Infinity,
            duration: Math.random() * (50 - 30) + 30,
            repeatType: 'mirror',
            ease: 'linear'
          },
          backgroundPositionY: {
            duration: 2,
            ease: 'easeOut'
          }
        }}
      />
    </motion.div>
  )
}
