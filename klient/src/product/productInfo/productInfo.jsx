import { useState } from "react"
import styles_productInfo from "./productInfo.module.css"

function ProductInfo(){
    const [amount, setAmount] = useState(1)

    return(
        <div className={styles_productInfo.productInfo}>
            <div className={styles_productInfo.upperPanel}>
                <h2> Zbroja płytowa NON NOBIS DOMINE tytanowa </h2>
                <p className={styles_productInfo.productPrice}> 24999.99$ </p>
                <p className={styles_productInfo.lowerText}> producent: Zbrojownia Pana </p>
                <p className={styles_productInfo.lowerText}> w magazynie: 25 </p>
            </div>

            <div className={styles_productInfo.lowerPanel}>
                <div>
                    ILOŚĆ SZTUK<input type="number" min={1}value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                </div>
                <button> KUP </button>
                <button> DODAJ DO KOSZYKA </button>
            </div>
        </div>
    )
}

export default ProductInfo