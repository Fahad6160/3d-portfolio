import CountUp from 'react-countup'
import {counterItems} from '../constants/index.js'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item)=>(
                <div className='bg-zinc-900 rounded-lg p-10 flex flex-col'>
                  <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-0'>
                    <CountUp suffix={item.suffix} end={item.value} />
                  </div>
                  <div className='text-whie-50 text-lg'>{item.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter