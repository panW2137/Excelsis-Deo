import styles_paginator from "./paginator.module.css"

function Paginator(){
    return (
        <div className={styles_paginator.paginator}>
            <div> {"<"} </div>
            <div> 1 </div>
            <div> 2 </div>
            <div> 3 </div>
            <div> {">"} </div>
        </div>
    )
}

export default Paginator