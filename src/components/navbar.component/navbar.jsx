import styles from './navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navwrapper}>
      <h1 className={styles.navh1}>Elect.NG</h1>
      <ul className={styles.navlist}>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>FAQS</li>
        <button className={styles.loginbtn}>Login</button>
        <button className={styles.registerbtn}>Register</button>
      </ul>
    </nav>
  )
}

export default Navbar
