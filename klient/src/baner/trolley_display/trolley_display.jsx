import koszyk from "../../temp files/koszyk.png"
import styles_trolley_disp from "./trolley_display.module.css"

function Trolley() {
    return (
        <div className={styles_trolley_disp.trolley}>
            <img src={koszyk} alt="koszyk"></img>
            <p> 2137213721372137.00 $</p>
        </div>
    )
}

export default Trolley