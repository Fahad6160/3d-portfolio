import { useRef } from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  
  
  useGSAP(()=>{
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    projects.map((card, index)=>{
    gsap.fromTo(card, 
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100'
            }
        }
    )
    })
    gsap.fromTo(sectionRef.current,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 1.5
        }
    )
  }, [])

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src='/images/project1.png' alt="Apple iPhone Website" />
                    </div>
                    <div className='text-content'>
                        <h2>Apple iPhone Website</h2>
                        <p className='text-white-50 md:text-xl'>A 3D-Responsive app built with React Js, TailwindCSS, GSAP & Three Js showcasing future of Web3. <span><a className="hover:text-white-50 text-white transition-all ml-1 md:ml-2" href="https://apple-iphone-inky.vercel.app/" target="_blank">Click to Experience</a></span></p>
                    </div> 
                </div>

                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#CFFFE2]'>
                            <img src='/images/project2.png' alt="" />
                        </div>
                        <div className="flex justify-between items-center">
                            <h2>Monster Energy Website</h2>
                            <h2 className="md:text-lg font-medium"><a className="hover:text-white-50 text-white transition-all ml-1 md:ml-2" href="https://monster-energy-mauve.vercel.app/" target="_blank">Click to View</a></h2>
                        </div>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#FFFCFB]'>
                            <img src='/images/project3.png' alt="" />
                        </div>
                        <div className="flex justify-between items-center">
                            <h2>VueLamp UI</h2>
                            <h2 className="md:text-lg font-medium"><a className="hover:text-white-50 text-white transition-all ml-1 md:ml-2" href="https://lamp-ui-website.vercel.app/" target="_blank">Click to View</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection