import { socialImgs } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center items-center">
                <a href="#hero">Back to Top</a>
            </div>

            <div className="socials">
                {socialImgs.map((img)=>(
                    <a className="icon" target="_blank" href={img.url} key={img.url}>
                        <img src={img.imgPath} alt={img.name} />
                    </a>
                ))}
            </div>

            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end ">
                    &copy; {new Date().getFullYear()} Fahad | Fullstack Developer. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer