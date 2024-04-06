import styles_nav_item from "./navbar_item.module.css"

function Nav_item(props){
    return(
        <div className={styles_nav_item.item}>
            {props.text}
        </div>
    )
}

Nav_item.defaultProps = {
    text: "Jan Paweł II"
}

export default Nav_item
