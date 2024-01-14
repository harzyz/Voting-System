import styles from './ongoingvote.module.css'
import { ongoingvotesdata } from './ongoinvotedata'
import { PiChartLineLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

function Ongoingvote() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <div className={styles.choice}>Ongoing</div>
        <div className={styles.nxtchoice}>Participated</div>
      </div>

      <div className={styles.elections}>
        {ongoingvotesdata.map((item)=>(
          <div key={item.id} className={styles.outline}>
            <div className={styles.line}>
              <div className={styles.votedetails}>
                <h1>{item.votename}</h1>
                <h1>Candidates: {item.numberofcandidates}</h1>
                <div className={styles.candidates}>
                  <img src={item.candidate1} alt="" />
                  <img src={item.candidate2} alt="" />
                  <img src={item.candidate3} alt="" />
                  <img src={item.candidate4} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.bottomline}>
              <div className={styles.statistics}>
                <div className={styles.stats}><CiClock2 className={styles.statsicon} /><p>Voting ends in 8 hours</p></div>
                <div className={styles.stats}><PiChartLineLight /><p>40,320,261 votes</p></div>
              </div>
              <button className={styles.voteaction}>Vote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ongoingvote
