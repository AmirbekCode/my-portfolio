import "./main.css"
import MyFoto from "../../assets/Your Image 1.png"
import { motion, useScroll } from "framer-motion"
import '../../styles/style.css'
import Services from '../Services/Services'

export default function Main() {
    const { scrollYProgress } = useScroll();
    return (
        <div className="Main">
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="Main_section">
                <div className="info_section">
                    <div className="myname_section">
                        <h1 className="myname">I'm Amirbek Rajabov </h1>
                        <span className="yellow">Front - End Developer</span>
                    </div>
                    <span className="info_description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                    </span>
                    <button className="info_button">
                        HIRE ME <span className="animation_icon"><i class="fa-solid fa-arrow-right"></i></span>
                    </button>
                </div>
                <img src={MyFoto} alt="" />

            </div>
            <div className="services">
                <h1 className="sectionName">My Services</h1>
                <div className="servicecARD">
                    {
                        Services.map((item) => {
                            return (
                                <div className="Box">
                                    <img src={item.url} className="imgService" />
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}