import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

import ShoppingCartIcon from "../../icons/ShoppingCartIcon";

const Navbar = ({ numberOfItems }) => {
  return (
    <nav>
      <Link to={"/"} className={styles.logo}>My Store</Link>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/products/"}>Products</Link>
      </ul>
        <Link to={"/cart/"}>
          <ShoppingCartIcon />
          {numberOfItems === 0 ? null : <span className={styles.itemsNumber}>{numberOfItems}</span>}
        </Link>
    </nav>
  )
};

export default Navbar;