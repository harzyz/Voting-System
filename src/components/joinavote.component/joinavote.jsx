import { Link } from 'react-router-dom'
import styles from './joinavote.module.css'
import { JoinavoteData } from './joinavotedata'
import Search from '../search.component/search'

function Joinavote() {
  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.user}>
        <div className={styles.currentuser}>J</div> 
        <p> Hello James</p> 
      </div>

      <h3 className={styles.sectiontitle}>Join a Vote</h3>
      <p className={styles.sectiontext}>Kindly select a vote you want to join</p>

      <div className={styles.interfaceactions}>
        <h2 className={styles.recent}>Recent Polls </h2>
        <h2 className={styles.seeall}>See All</h2>
      </div>

      <div className={styles.events}>
        {JoinavoteData.map((item)=>(
          <Link to={item.link} className={styles.eventlink} key={item.id}>
            <div className={styles.eventcontainer}>
              <div className={styles.eventimage}><img src={item.image} alt={item.alternative} /></div>
              <h3 className={styles.eventtitle}>{item.event}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Joinavote
