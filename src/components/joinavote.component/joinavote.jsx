import styles from './joinavote.module.css'
import { JoinavoteData } from './joinavotedata'

function Joinavote() {
  return (
    <div>
      <div className={styles.user}>
        <div className={styles.currentuser}>J</div> Hello, <span>James</span> 
      </div>

      <h3 className={styles.sectiontitle}>Join a Vote</h3>
      <p className={styles.sectiontext}>Kindly select a vote you want to join</p>

      <div className={styles.interfaceactions}>
        <h2>Recent Polls </h2>
        <h2>See All</h2>
      </div>

      <div className={styles.events}>
        {JoinavoteData.map((item)=>(
          <div className={styles.eventcontainer} key={item.id}>
            <div className={styles.eventimage}><img src={item.image} alt={item.alternative} /></div>
            <h3 className={styles.eventtitle}>{item.event}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Joinavote
