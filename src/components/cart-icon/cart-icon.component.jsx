import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import './cart-icon.styles.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>{cartCount}</span>
    </div>
    );
}

export default CartIcon;