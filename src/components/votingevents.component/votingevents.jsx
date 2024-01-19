import { Link } from 'react-router-dom'
import styles from './votingevents.module.css'
import { VotingEventData } from './votingeventsdata'

function Votingevents() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.eventh1}>Nigeria 2023</h1>
      <h1 className={styles.eventh2}>Presidential Election 2023</h1>

      <div className={styles.candidates}>
        {VotingEventData.map((item)=>(
        <div className={styles.eventcontainer} key={item.id}>
          <div className={styles.candidateinfo}>
            <div className={styles.eventimage}>
              <img src={item.image} alt={item.alternative} />
            </div>
            <div>
              <h1 className={styles.eventh2}>{item.alternative}</h1>
              <p className={styles.eventp}>{item.partyname}</p>
            </div>
          </div>
          <div className={styles.partyname}><img src={item.party} alt="" /></div>
        </div>
        ))}
      </div>
      <Link to='/ongoingvote'><button className={styles.uploadbtn}>Join A Vote</button></Link>
    </div>
  )
}

export default Votingevents
