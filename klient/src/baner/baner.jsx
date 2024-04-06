import logo from "../temp files/logo.png"
import styles_baner from "./baner.module.css"
import Profile from "./profile_display/profile_display"
import Trolley from "./trolley_display/trolley_display"

function Baner() {
    return (
        <header className={styles_baner.header}>

            <div className={styles_baner.left}>
                <img src={logo} alt="logo"></img>
            </div>

            <div className={styles_baner.center}>
                <h1> "Nie wiem" </h1>
                <p>św. Jan Paweł II</p>
            </div>

            <div className={styles_baner.right}>
                <Profile />

                <Trolley />
            </div>

        </header>
)
}

export default Baner