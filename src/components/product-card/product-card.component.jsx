import './product-card.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../../button/button.component';
const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemsToCart} = useContext(CartContext)
    const addProductToCart  = () => addItemsToCart(product);

    return (
        <div className='product-card-container'>

            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <Button type="inverted" onClick = {addProductToCart}>Add to cart</Button>
        </div>



    );
}

export default ProductCard;