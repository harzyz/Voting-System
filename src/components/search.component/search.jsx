import styles from './search.module.css'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io"

function Search() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchcontain}>
        <CiSearch className={styles.searchicon} />
        <input className={styles.searchInput} type="text" placeholder='Search' />
      </div>
      <IoIosNotificationsOutline className={styles.notifyicon} />
      <div className={styles.currentuser}>J</div>
    </div>
  )
}

export default Search
