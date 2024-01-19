import { FaArrowLeft } from 'react-icons/fa'
import styles from './navigation.module.css'

function Navigation({label}) {
  return (
    <div className={styles.navigation}>
      <FaArrowLeft className={styles.arrow} />
      <p>{label}</p>
    </div>
  )
}

export default Navigation
