import styles from './pollsuccesspage.module.css'
import successicon from '../../images/succesicon.png'
import { Link } from 'react-router-dom'

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
        <Link to='/createpoll'><button className={styles.createBtn}>Done</button></Link>
      </div>
    </div>
  )
}

export default PollSuccess
