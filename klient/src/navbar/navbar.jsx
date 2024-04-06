import { useState } from "react"

import styles_navbar from "./navbar.module.css"
import Nav_item from "./navbar_item/navbar_item"

function Navbar(){
    const [showCategories, setShowCategories] = useState(false)

    return(
        //ja kurwa pierdolę czemu kurwa nie mogę wjebać tego
        //onclicka do navitem co za jebany
        //debil to gówno projektował
        //jebać reacta
        <>  
            <div className={styles_navbar.navbar} onClick={() => setShowCategories(!showCategories)}>
                <Nav_item text="Strona główna"/>
                <Nav_item text="Kategorie"/>
                <Nav_item text="O nas"/>
                <Nav_item text="Kontakt"/>
                <Nav_item text="Pomoc"/>
            </div>

            { showCategories && <div className={styles_navbar.navbar} >
                <Nav_item text="Krucyfiksy i krzyże"/>
                <Nav_item text="Różańce"/>
                <Nav_item text="Krzyżyki i medaliki"/>
                <Nav_item text="Obrazy"/>
                <Nav_item text="Posążki Maryjne"/>
                <Nav_item text="Obrona wiary"/>
                <Nav_item text="Relikty"/>
                <Nav_item text="Inne" />
            </div>}
        </>
    )
}

export default Navbar