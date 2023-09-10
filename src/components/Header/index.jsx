import Logo from "../../assets/logo.svg";
import {FiFacebook} from "react-icons/fi";
import {BiLogoInstagram} from "react-icons/bi";
import {CiTwitter} from "react-icons/ci"
import {AiOutlineYoutube} from "react-icons/ai"

export const Header = () => {
    return(
        <header>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <FiFacebook />
                <BiLogoInstagram />
                <CiTwitter />
                <AiOutlineYoutube />
            </div>
        </header>
    )
}