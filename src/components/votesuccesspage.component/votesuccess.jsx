import styles from './votesuccess.module.css'
import successicon from '../../images/succesicon.png'
import { Link } from 'react-router-dom'

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
        <Link to='/createpoll'><button className={styles.createBtn}>Done</button></Link>
        <Link to='/statistics'><button className={styles.votebtn}>Check Live Stat</button></Link>
      </div>
    </div>
  )
}

export default Votesuccess
