import {logoIconsList, techStack} from '../constants/index.js'

const LogoIcon = ({icon})=>{
    return (
        <div className='flex-none flex-center gap-3 marquee-item'>
            <img className='' src={icon.logo} alt={icon.name} />
            <h1 className='text-bold text-3xl text-[#858fad]'>{icon.name}</h1>
        </div>
    )
}

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge' />
        <div className='gradient-edge' />

        <div className="marquee h-52">
            <div className='marquee-box md:gap-12 gap-5'>
                {techStack.map((tech, i)=>(
                    <LogoIcon key={tech.name} icon={tech} />
                ))}
                {techStack.map((tech, i)=>(
                    <LogoIcon key={tech.name} icon={tech} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection