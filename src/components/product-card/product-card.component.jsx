import './product-card.styles.scss'
import { useContext } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Button from '../../button/button.component';
import { addItemsToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const {name,price,imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    const addProductToCart  = () => dispatch(addItemsToCart(cartItems,product));

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