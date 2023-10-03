import styles from "./TransactionHistoryItems.module.css"

export const TransactionHistoryItems = ({ type, amount, currency, id }) => {
  return (
    <tr className={ id % 2 === 0 ?`${styles.item} ${styles.odd}`: `${styles.item} ${styles.even}`}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
