import { Routes, Route } from 'react-router-dom' 
import styles from './dashboard.module.css'
import Sidebar from '../sidebar.component/sidebar'
import Search from '../search.component/search'
import Createpoll from '../createpoll.component/createpoll'
import CreateAPoll from '../createapoll.component/createapoll'
import Polluploads from '../polluploads.component/polluploads'
import Uploadfiles from '../uploadfiles.component/uploadfiles'
import Joinavote from '../joinavote.component/joinavote'
import Votingevents from '../votingevents.component/votingevents'
import Ongoingvote from '../ongoingvote.component/ongoingvote'
import Ongoingvotesdetails from '../ongoingvotesdetail.component/ongoingvotesdetails'
import Candidatesdetails from '../candidatedetails.component/candidatesdetails'
import Statisticsoptions from '../statisticsoptions.component/statisticsoptions'
import Votingended from '../votingended.component\'/votingended'
import Profile from '../profile.component/profile'

function Dashboard({children}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Dashboard
