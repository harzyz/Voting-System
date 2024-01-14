import styles from './ongoingvotesdetails.module.css'
import bg from '../../images/election 1.png'
import { ongoingvotedetails } from './ongoingvotesdetailsdata'

function Ongoingvotesdetails() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img src={bg} alt="" />
      </div>
      <div className={styles.ongoingstats}>
        <span>
          <h2>Ongoing votes</h2>
          <h2>40,320,261 votes</h2>
        </span>
      </div>
      <div className={styles.candidates}>
        {ongoingvotedetails.map((item)=>(
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
          <button className={styles.votedetailsbtn}>Vote</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Ongoingvotesdetails
