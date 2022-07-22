import { Outlet,Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import '../navigation/navigation.styles.scss'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);

  
    return (
      <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
                <CrownLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
                SHOP
          </Link>
          { currentUser ? ( <span className="nav-link" onClick={signOutUser}> SIGN OUT</span>) :
          ( <Link className="nav-link" to='/authentication'>
            SIGN IN
          </Link>)
        }
        <CartIcon></CartIcon>
          
          </div>
          { isCartOpen && <CartDropdown /> }
          </div>
        <Outlet></Outlet>
      </Fragment>
    );
  }

  export default Navigation;