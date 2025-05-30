import styles from "./ProductCard.module.css"

const ProductCard = ({ info }) => {
  return (
    <div className={styles.card}>
      <img src={info.image} alt="picture of a product" />
      <p>{info.title}</p>
    </div>
  )
};

export default ProductCard;