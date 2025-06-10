import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = ({ numberOfItems }) => {
  return (
    <nav>
      <div>Logo</div>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/products/"}>Products</Link>
      </ul>
      <div><Link to={"/cart/"}>Cart {numberOfItems > 0 ? ` (${numberOfItems} items)` : null}</Link></div>
    </nav>
  )
};

export default Navbar;