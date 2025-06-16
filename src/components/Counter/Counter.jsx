import styles from './Counter.module.css'

const Counter = ({ quantity, setQuantity }) => {

  const increment = () => {
    let newCount = Number(quantity);
    setQuantity(newCount + 1);
  }

  const decrement = () => {
    let newCount = Number(quantity);
    setQuantity(newCount - 1);
  }

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>-</button>
      <input type="text" size="2" maxLength="10" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
      <button onClick={increment}>+</button>
    </div>
  )
};

export default Counter;