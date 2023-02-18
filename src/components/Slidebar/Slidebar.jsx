import './slidebar.css'
import Profile from "../../assets/Profile.png"
import Instagram from "../../assets/Instagram.png"
import YouTube from "../../assets/YouTube.svg"
import Telegram from "../../assets/Instagram.png"
import { Divider } from '@chakra-ui/react'
import Counter from '../Count/Counter'
import { useState } from 'react'
import Loader from '../loaderSkill/Loader'
import Icon from '../../assets/Icons.svg'
import Vector from "../../assets/Vector.png"
export default function Slidebar({ countt, setCountt }) {
    const [state, setState] = useState(90)



    return (
        <div className="Slidebar">
            <div className="profile_section">
                <img src={Profile} alt="" className="profile_photo" />
                <h2 className="name">
                    Amirbek Rajabov
                </h2>
                <span className="profession">
                    Font-end Developer
                </span>
                <div className="social_media">
                    <ul className="profile_list">
                        <li>
                            <a href=""><img src={Instagram} /></a>
                        </li>
                        <li>
                            <a href=""><img src={YouTube} /></a>
                        </li>
                        <li>
                            <a href=""><img src={Telegram} /></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-github"></i></a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="divider"></div>
            <div className="profile_info">
                <div className="titles">
                    <h2>Yosh:</h2>
                    <h2>Freelance:</h2>
                    <h2>Adress</h2>
                </div>
                <div className="infos">
                    <h2><Counter countt={countt} /></h2>
                    <h2>Avaible</h2>
                    <h2>Xonqa</h2>
                </div>
            </div>
            <div className="divider"></div>
            <div className="skills">
                <h2 className='skill_title'>Skills</h2>
                <div className="skills-item">
                    <div className="skills_item">
                        <span className='skill_name'>HTML</span>
                        <Loader state={90} />
                    </div>
                    <div>
                        <div className="progres" style={{ width: "90%" }}></div>
                    </div>
                    <div className="skills_item">
                        <span className='skill_name' >CSS</span>
                        <Loader state={80} />
                    </div>
                    <div>
                        <div className="progres" style={{ width: "80%" }}></div>
                    </div>
                    <div className="skills_item">
                        <span className='skill_name'>ReactJS</span>
                        <Loader state={50} />
                    </div>
                    <div>
                        <div className="progres" style={{ width: "50%" }}></div>
                    </div>
                </div>
            </div>
            <div className="extraskills">
                <h2 className='Extra'>Extra Skills</h2>
                <div className="extraskill_items">
                    <div className="extraskill_item">
                        <img src={Icon} />
                        <span className="extraskill_title">
                            Bootstrap, Materialize
                        </span>
                    </div>
                    <div className="extraskill_item">
                        <img src={Icon} />
                        <span className="extraskill_title">
                            Stylus, Sass, Less
                        </span>
                    </div>
                    <div className="extraskill_item">
                        <img src={Icon} />
                        <span className="extraskill_title">
                            Gulp, Webpack, Grunt
                        </span>
                    </div>
                </div>
            </div>
            <button className='downloadsvg'>Download cv
            <img src={Vector} className="ccc" />
            </button>
        </div>
    )
}