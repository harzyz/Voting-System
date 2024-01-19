import styles from './homepage.module.css'
import ballot from '../../../images/BALLOT 1.png'
import topright from '../../../images/greentopright.png'
import bottomleft from '../../../images/greenbottomleft.png'
import Navbar from '../../navbar.component/navbar'
import { Link } from "react-router-dom/dist";

function Homepage() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div style={{ textAlign: 'center', zIndex: '4' }}>
        <h6 className={styles.homeh6}>Welcome to</h6>
        <h1 className={styles.homeh1}>Elect.NG</h1>
        <h6 className={styles.homeh6}>An online voting app</h6>
      </div>
      <img className={styles.ballot} src={ballot} alt="" />
      <Link to='/onboarding'><button className={styles.voterbtn}>Register as a voter</button></Link>
      <Link to='/onboarding'><button className={styles.adminbtn}>Register as an admin</button></Link>
      <div className={styles.topright}>
        <img src={topright} alt="" />
      </div>
      <div className={styles.bottomleft}>
        <img  src={bottomleft} alt="" />
      </div>
    </div>
  )
}

export default Homepage
