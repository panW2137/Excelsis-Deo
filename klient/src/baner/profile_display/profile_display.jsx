import Wew from "../../temp files/Wew.png"
import styles_profile_disp from "./profile_display.module.css"

function Profile() {
    return(
    <div className={styles_profile_disp.profile}>
        <img src={Wew} className={styles_profile_disp.img} alt="logo" />
        <div>
            <p> Wiktor</p>
            <p> Janusz Izydor </p>
            <p> Hodlik </p>
        </div>
    </div>
    )
}

export default Profile