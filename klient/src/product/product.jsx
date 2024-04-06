import styles_product from "./product.module.css"
import zbroja from "../temp files/zbroja.png"
import ProductInfo from "./productInfo/productInfo"

function Product(){
    return(
        <div>
            <div className={styles_product.productInfoPanel}>
                <img src={zbroja} alt="zdjecie produktu"></img>
                <ProductInfo />
            </div>
            <div className={styles_product.productDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget fringilla nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nunc mi, facilisis vitae fermentum eget, congue ut libero. Sed auctor nibh non erat ornare bibendum. Sed sodales libero in nibh commodo mattis. Etiam in elit vel nisl hendrerit ullamcorper id sagittis lorem. Aenean tincidunt finibus metus, condimentum cursus orci. Aliquam tincidunt, enim ut venenatis feugiat, enim lectus lobortis diam, et mollis ligula arcu id leo. Praesent vulputate ipsum non molestie dignissim. Nam ultrices eleifend lobortis. Aenean urna nisi, dapibus et auctor a, cursus a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Ut laoreet lacus tincidunt, mattis metus non, porta diam. Donec maximus ut leo vitae vestibulum. Proin hendrerit neque et viverra faucibus. Donec dignissim massa consequat dolor accumsan finibus. Duis porta tincidunt diam, in ullamcorper justo rutrum et. Aenean tincidunt justo nec lorem laoreet, sed ornare leo ornare. Duis eleifend sapien id magna pulvinar, nec finibus tellus iaculis. Donec quis ante commodo, facilisis dolor ut, lobortis tortor. Mauris id pulvinar nulla. Praesent tempus, diam eu accumsan efficitur, dui turpis tristique urna, et posuere diam elit sit amet tellus.

Donec egestas eu sapien a dapibus. Fusce a vulputate mi. Phasellus volutpat eu dolor eu scelerisque. Sed viverra pellentesque imperdiet. Nunc malesuada turpis metus, nec posuere massa imperdiet eget. Aenean vel fermentum velit. Phasellus aliquet vel lacus nec rhoncus. Nulla urna sem, aliquam pulvinar porttitor id, placerat sit amet velit. Etiam quis ultricies est. Quisque a eros neque. Nunc lacus mi, gravida a arcu vitae, aliquet vehicula enim. Proin elit quam, maximus a suscipit quis, consequat eget massa. 
            </div>
        </div>
    )
}

export default Product