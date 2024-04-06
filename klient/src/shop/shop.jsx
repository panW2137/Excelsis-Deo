import styles_shop from "./shop.module.css"
import ShopItem from "./shopItem/shopItem"
import Paginator from "./paginator/paginator"

function Shop(){
    return(
        <div className={styles_shop.shopWrapper}>
            <div className={styles_shop.categories}>
                <p>Krucyfiksy i krzyże</p>
                <p>Różańce</p>
                <p>Krzyżyki i medaliki</p>
                <p>Obrazy</p>
                <p>Posążki Maryjne</p>
                <p>Obrona wiary</p>
                <p>Relikty</p>
                <p>Inne</p>
            </div>

            <div className={styles_shop.shop}>
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />

                <Paginator />
            </div>
        </div>
    )
}

export default Shop