import styles from './ongoingvotesdetails.module.css'
import bg from '../../images/election 1.png'
import { ongoingvotedetails } from './ongoingvotesdetailsdata'
import { Link } from 'react-router-dom'

function Ongoingvotesdetails() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img src={bg} alt="" />
      </div>
      <div className={styles.ongoingstats}>
        <span>
          <p className={styles.ongoingp}>Ongoing votes</p>
          <p className={styles.ongoingp}>40,320,261 votes</p>
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
          <Link to={`/ongoingvote/${item.id}`}><button className={styles.votedetailsbtn}>Vote</button></Link>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Ongoingvotesdetails
