import { useState } from "react"
import styles_basketItem from "./basketItem.module.css"
import zbroja from "../../temp files/zbroja.png"

function BasketItem(){
    const [amount,setAmount] = useState(1)

    return(
        <div className={styles_basketItem.basketItem}>
            <div className={styles_basketItem.leftPanel}>
                <img src={zbroja} alt="zdjęcie produktu"></img>

                <div className={styles_basketItem.productSummary}>
                    <p>zbroja płyotwa NON NOBIS DOMINE tytanowa</p>
                    <div>ilość: <input type="number" min={1} value={amount} onChange={(e)=>setAmount(e.target.value)}></input></div>
                </div>
            </div>

            <div className={styles_basketItem.price}>
                <p>{24999.99*amount}$</p>
            </div>
        </div>
    )
}

export default BasketItem