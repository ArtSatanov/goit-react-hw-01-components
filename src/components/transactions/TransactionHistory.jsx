import styles from './TransactionHistory.module.css';
import { TransactionHistoryItems } from './transactionsItems/TransactionHistoryItems';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItems
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            id={items.indexOf(item)}
          />
        ))}
      </tbody>
    </table>
  );
};
