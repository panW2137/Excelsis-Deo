import styles_basket from "./basket.module.css"
import BasketItem from "./basketItem/basketItem"
import PaymentPanel from "./payment/payment"

function Basket() {
    return(
        <div className={styles_basket.basket}>
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />

            <div className={styles_basket.sumPrice}>
                łącznie: <span>24999.99$</span>
            </div>

            <PaymentPanel />
        </div>
    )
}

export default Basket