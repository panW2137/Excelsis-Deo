import zbroja from "../../temp files/zbroja.png"
import styles_shopItem from "./shopItem.module.css"

function ShopItem(){
    return (
        <div className={styles_shopItem.shopItem}>
            <div>
                <img src={zbroja}></img>
            </div>
            <div>
                <h2>Zbroja płytowa NON NOBIS DOMINE tytanowa</h2>
                <p className={styles_shopItem.itemPrice}>24999.99$</p>
                <p className={styles_shopItem.itemInfo}>producent: Zbrojownia Pana</p>
                <p className={styles_shopItem.itemInfo}>w magazynie: 25</p>
                <p className={styles_shopItem.itemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget fringilla nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nunc mi, facilisis vitae fermentum eget, congue ut libero. Sed auctor nibh non erat ornare bibendum. Sed sodales libero in nibh commodo mattis. Etiam in elit vel nisl hendrerit ullamcorper id sagittis lorem. Aenean tincidunt finibus metus, condimentum cursus orci. Aliquam tincidunt, enim ut venenatis feugiat, enim lectus lobortis diam, et mollis ligula arcu id leo. Praesent vulputate ipsum non molestie dignissim. Nam ultrices eleifend lobortis. Aenean urna nisi, dapibus et auctor a, cursus a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Ut laoreet lacus tincidunt, mattis metus non, porta diam. Donec maximus ut leo vitae vestibulum. Proin hendrerit neque et viverra faucibus. Donec dignissim massa consequat dolor accumsan finibus. Duis porta tincidunt diam, in ullamcorper justo rutrum et. Aenean tincidunt justo nec lorem laoreet, sed ornare leo ornare. Duis eleifend sapien id magna pulvinar, nec finibus tellus iaculis. Donec quis ante commodo, facilisis dolor ut, lobortis tortor. Mauris id pulvinar nulla. Praesent tempus, diam eu accumsan efficitur, dui turpis tristique urna, et posuere diam elit sit amet tellus.
                </p>
            </div>
        </div>
    )
}

export default ShopItem