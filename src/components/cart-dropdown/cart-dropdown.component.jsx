import Button from '../../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
const CartDropdown = () => {
    const {cartIems} = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
      {cartIems.length ? (
          cartIems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;