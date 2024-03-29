import styles from './createaccount.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom/dist'

function Createaccount() {
  const [showpassword, setShowPassword] = useState(false)
  const [showConfirmpassword, setShowConfirmPassword] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h1 className={styles.createh1}>Elect.NG</h1>
        <div className={styles.usertype}>
          <button className={isAdmin ? styles.userbtn2 : styles.userbtn} onClick={()=> setIsAdmin(false)}>User</button>
          <button className={isAdmin ? styles.adminbtn2 : styles.adminbtn} onClick={()=> setIsAdmin(true)}>Admin</button>
        </div>
        <h3 className={styles.createh3}>Create Account</h3>
        <form className={styles.createform}>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Phone Number' />

          {isAdmin ? <input type="text" placeholder="Admin No" /> : <input type="text" placeholder="Voter's Identification Number (optional)" /> }
          
          <div className={styles.createformpassword}>
            <input type={showpassword ? 'text' : 'password'} placeholder='Password' />
            {showpassword ? <FaEye onClick={()=> setShowPassword(false)} className={styles.showicon} /> :
            <FaEyeSlash onClick={()=> setShowPassword(true)} className={styles.showicon} />}
          </div>
          <div className={styles.createformpassword}>
            <input type={showConfirmpassword ? 'text' : 'password'} placeholder='Confirm Password' />
            {showConfirmpassword ? <FaEye onClick={()=> setShowConfirmPassword(false)} className={styles.showicon} /> :
            <FaEyeSlash onClick={()=> setShowConfirmPassword(true)} className={styles.showicon} />}
          </div>
          <Link to='/createpoll'><button type='submit'>Create Account</button></Link>        
          <p className={styles.createp}>Already have an account? <Link to='/login' style={{color: '#0CBB5C'}}>Log In</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Createaccount
