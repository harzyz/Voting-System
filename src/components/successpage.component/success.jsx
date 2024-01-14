import styles from './success.module.css'
import successicon from '../../images/succesicon.png'

function Success() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h1 className={styles.successh1}>Elect.NG</h1>
        <div className={styles.iconcontain}>
          <img src={successicon} alt="" />
        </div>
        <span>
        <h1 className={styles.verified}>Verification Successful</h1>
        <p className={styles.successp}>Welcome to Elect.Ng</p>
        </span>
        <button className={styles.createBtn}>Go to Home</button>
      </div>
    </div>
  )
}

export default Success
