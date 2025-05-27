import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"products"}>Products</Link>
        <Link to={"cart"}>Cart</Link>
      </ul>
    </nav>
  )
};

export default Navbar;