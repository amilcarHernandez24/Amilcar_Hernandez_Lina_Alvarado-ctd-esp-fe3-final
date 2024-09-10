import styles from './successMessage.module.css'
const SuccessMessage = ({ message }) => {
    return (
      <div className={styles.successMessage}>
        <div className={styles.checkMark}>✓</div>
        <p className={styles.successText}>{message}</p>
      </div>
    );
  };
  
  export default SuccessMessage;