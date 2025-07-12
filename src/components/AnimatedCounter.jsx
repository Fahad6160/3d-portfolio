import CountUp from 'react-countup'
import {counterItems} from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const sectionRef = useRef(null);
  const [shouldCount, setShouldCount] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      once: true,
      onEnter: () => setShouldCount(true),
    });
  }, []);


  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32' ref={sectionRef}>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item)=>(
                <div className='bg-zinc-900 rounded-lg p-10 flex flex-col'>
                  <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-0'>
                    {shouldCount ? (
                      <CountUp suffix={item.suffix} end={item.value} />
                    ) : ('0')}
                  </div>
                  <div className='text-whie-50 text-lg'>{item.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter