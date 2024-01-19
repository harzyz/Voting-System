import styles from './votesuccess.module.css'
import successicon from '../../images/succesicon.png'

function Votesuccess() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h1 className={styles.successh1}>Elect.NG</h1>
        <div className={styles.iconcontain}>
          <img src={successicon} alt="" />
        </div>
        <span>
        <h1 className={styles.verified}>Vote Successful</h1>
        <p className={styles.successp}>Your vote has been successfully submitted</p>
        </span>
        <button className={styles.createBtn}>Done</button>
        <button className={styles.votebtn}>Check Live Stat</button>
      </div>
    </div>
  )
}

export default Votesuccess
