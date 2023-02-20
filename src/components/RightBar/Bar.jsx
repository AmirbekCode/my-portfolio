import './bar.css'
import bar from "../../assets/Contrast.png"
export default function Bar() {
    return (
        <div className="Bar">
            <button className="nightmode">
                <img src={bar} alt="" />
            </button>
            <div className="buttons_section">
                <a className="animebtn" href=''><span class="tooltiptext">Home</span><i class="fa-solid fa-house"></i></a>
                <a className="animebtn" href=''><span class="tooltiptext">Services</span><i class="fa-solid fa-file-code"></i></a>
                <a className="animebtn" href=''><span class="tooltiptext">Eduction</span><i class="fa-solid fa-user"></i></a>
                <a className="animebtn" href=''><span class="tooltiptext">Portfolio</span><i class="fa-solid fa-briefcase"></i></a>
                <a className="animebtn" href=''><span class="tooltiptext">Contact</span><i class="fa-solid fa-feather"></i></a>
                <a className="animebtn" href=''><span class="tooltiptext">Contact</span><i class="fa-solid fa-message"></i></a>

                <a className="animebtn" href=''>
                </a>

            </div>
        </div>

    )
}