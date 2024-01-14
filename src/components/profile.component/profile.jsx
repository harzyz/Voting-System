import styles from './profile.module.css'
import { RiEdit2Line } from "react-icons/ri";
import { profiledata } from './profiledata';

function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userdetails}>
        <div className={styles.currentuser}>J</div>
        <div>
          <h3>Uzor James</h3>
          <span className={styles.editaction}><p>Edit Profile</p> <RiEdit2Line className={styles.editicon} /></span>
        </div>
      </div>
      <div className={styles.profiledetails}>
        {profiledata.map((item) =>(
          <div key={item.id} className={styles.profileitem}>
            <div className={styles.profileicons}>
            <span className={styles.iconic}>{item.icon}</span>
            </div>
            <h3>{item.detail}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
