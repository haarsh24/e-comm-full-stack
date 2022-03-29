import "../styles/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/authContext";

const Navbar = ()=>{
    const { authState } = useAuth();
    const { cartState: { cartItem } } = useCart();
    console.log(cartItem.length);
    console.log(authState);
    return (
      <>
        <div className="header">
          <div className="bars">
            <h2>
              {" "}
              <Link className="logo" to="/">
                SneakerXclub
              </Link>{" "}
            </h2>
          </div>
          <input className="input-text input-search" placeholder="Search" />
          <div className="nav-icon">
            <Link to="/login" className="h3 p1">
              <span>
                {authState.isLogin
                  ? `Hi, ${authState.userData.firstName}`
                  : "Login"}
              </span>{" "}
            </Link>

            <Link to="/wishlist">
              {" "}
              <i className="fa fa-heart-o fa-2x " aria-hidden="true"></i>
            </Link>
            
              <Link to="/cart">
                <i
                  className="fa fa-shopping-cart fa-2x p1 "
                  aria-hidden="true"
                ></i>

                <span className={(cartItem.length)===0 ?"hidden":"h5"}>
                  {cartItem.length}
                </span>
              </Link>
           
            <Link to="/signup">
              {" "}
              <i className="fa fa-user-o fa-2x " aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </>
    );
}


export {Navbar}