import styles from './pollsuccesspage.module.css'
import successicon from '../../images/succesicon.png'

function PollSuccess() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h1 className={styles.successh1}>Elect.NG</h1>
        <div className={styles.iconcontain}>
          <img src={successicon} alt="" />
        </div>
        <span>
        <h1 className={styles.verified}>Poll Created Successfully</h1>
        {/* <p className={styles.successp}>Welcome to Elect.Ng</p> */}
        </span>
        <button className={styles.createBtn}>Done</button>
      </div>
    </div>
  )
}

export default PollSuccess
