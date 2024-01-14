import styles from './votingended.module.css'
import bg from '../../images/election 1.png'
import tinubu from '../../images/bola ahmed tinubu 1.png'
import peterobi from '../../images/peter obi 2.png'

function Votingended() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img src={bg} alt="" />
      </div>
      <div className={styles.ongoingstats}>
        <span>
          <h3>Ongoing votes</h3>
          <h3>50,320,261 votes</h3>
          <h3>Voting has ended</h3>
        </span>
      </div>
      <div className={styles.winningcandidate}>
        <h4>Winner</h4>
        <div className={styles.candidate}>
          <div className={styles.candidateimage}>
            <img src={tinubu} alt="" />
          </div>
          <div>
            <h4>Bola Ahmed Tinubu</h4>
            <p>All Progressive Party</p>
          </div>
        </div>
      </div>
      <div>
        <h4>You voted for</h4>
        <div className={styles.votedcandidate}> 
          <div className={styles.candidateimage}>
            <img src={peterobi} alt="" />
          </div>
          <div>
            <h4>Peter Obi</h4>
            <p>Labour Party (LP)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Votingended
