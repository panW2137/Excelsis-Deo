import styles_payment from "./payment.module.css"

function PaymentPanel(){
    return(
        <div className={styles_payment.paymentPanel}>
            <select>
                <option> Wybierz metodę płatności </option>
                <option> Blik </option>
                <option> Visa </option>
                <option> MasterCard </option>
                <option> PayPal </option>
                <option> Karta podarunkowa </option>
                <option> Na zeszyt </option>
            </select>

            <button> KUP </button>
        </div>
    )
}

export default PaymentPanel