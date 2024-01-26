import styles from './dashboard.module.css'
import Sidebar from '../sidebar.component/sidebar'

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
