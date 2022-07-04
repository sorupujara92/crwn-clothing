import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import '../navigation/navigation.styles.scss'
const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
        <Link className="nav-link" to='/'>
                <CrownLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
                SHOP
          </Link>
          <Link className="nav-link" to='/authentication'>
                SIGN IN
          </Link>
          </div>
          </div>
        <Outlet></Outlet>
      </Fragment>
    );
  }

  export default Navigation;