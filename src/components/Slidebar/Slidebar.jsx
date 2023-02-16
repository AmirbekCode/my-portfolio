import './slidebar.css'
import Profile from "../../assets/Profile.png"
import Instagram from "../../assets/Instagram.png"
import YouTube from "../../assets/YouTube.svg"
import Telegram from "../../assets/Instagram.png"
import { Divider } from '@chakra-ui/react'
import Counter from '../Count/Counter'
import { useState } from 'react'


export default function Slidebar({countt , setCountt}) {




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
                    <h2><Counter countt={countt}/></h2>
                    <h2>Avaible</h2>
                    <h2>Xonqa</h2>
                </div>
            </div>
            <div className="divider"></div>
            <div className="languages">

            </div>
        </div>
    )
}
