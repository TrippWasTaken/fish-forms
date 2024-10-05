import { fakeFish } from 'utils/fishTanks'
import { DummyTank } from './dummyTank'
import { Welcome } from './welcome'
import { motion } from 'framer-motion'
import { FormOne } from './formOne'
import { FormTwo } from './formTwo'

function App() {
  return (
    <div className="relative h-screen w-screen overflow-auto bg-zinc-800 text-white">
      <div className="grid size-full grid-cols-3 grid-rows-3 gap-4 p-32">
        <div>
          <DummyTank
            name={fakeFish[0].name}
            fishNames={fakeFish[0].fishNames}
            createdOn={fakeFish[0].createOn}
          />
        </div>
        <div>
          <DummyTank
            name={fakeFish[1].name}
            fishNames={fakeFish[1].fishNames}
            createdOn={fakeFish[1].createOn}
          />
        </div>
        <div>
          <DummyTank
            name={fakeFish[2].name}
            fishNames={fakeFish[2].fishNames}
            createdOn={fakeFish[2].createOn}
          />
        </div>
        <div className="col-start-1 row-start-3">
          <DummyTank
            name={fakeFish[3].name}
            fishNames={fakeFish[3].fishNames}
            createdOn={fakeFish[3].createOn}
          />
        </div>
        <div className="col-start-2 row-start-3">
          <DummyTank
            name={fakeFish[4].name}
            fishNames={fakeFish[4].fishNames}
            createdOn={fakeFish[4].createOn}
          />
        </div>
        <div className="col-start-3 row-start-3">
          <motion.button className=" aspect-square h-full w-auto rounded-full bg-white text-blue-500">
            Add new
          </motion.button>
        </div>
        <div className="col-span-3 col-start-1 row-start-2 place-self-center">
          <Welcome />
        </div>
      </div>

      {/* form one */}
      <FormOne />

      {/* form two */}
      <FormTwo />
    </div>
  )
}

export default App
