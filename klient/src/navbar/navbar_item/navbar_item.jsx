import { Link } from "react-router-dom"
import styles_nav_item from "./navbar_item.module.css"

function Nav_item(props){
    return(
        <div className={styles_nav_item.item}>
            <Link to={props.path}>{props.text}</Link>
        </div>
    )
}

Nav_item.defaultProps = {
    text: "Jan Paweł II",
    path: ""
}

export default Nav_item
