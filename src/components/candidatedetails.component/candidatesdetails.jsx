import styles from './candidatesdetails.module.css'
import peterObi from '../../images/peter obibig.png'

function Candidatesdetails() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.candidateiamge}>
        <img src={peterObi} alt="" />
      </div>

      <div className={styles.description}>
        <h2>Peter Obi</h2>
        <p>Labour Party</p>
        <p>Biography</p>
        <p>Lorem ipsum dolor sit amet consectetur. Elit tincidunt neque fringilla odio leo ac. Gravida iaculis amet lorem ac a volutpat amet urna. Felis duis ultricies tortor amet ultrices bibendum est volutpat. Eget orci porta est sollicitudin blandit. Tortor mauris lorem interdum odio elementum praesent condimentum dictum a. Pretium quam nec malesuada cursus volutpat mattis. Feugiat arcu ut euismod auctor senectus facilisis.</p>
      </div>

      <button className={styles.castvotebtn}>Cast Vote</button>
    </div>
  )
}

export default Candidatesdetails
