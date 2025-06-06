import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = ({ numberOfItems }) => {
  return (
    <nav>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/products/"}>Products</Link>
        <Link to={"/cart/"}>Cart {numberOfItems > 0 ? ` (${numberOfItems} items)` : null}</Link>
      </ul>
    </nav>
  )
};

export default Navbar;