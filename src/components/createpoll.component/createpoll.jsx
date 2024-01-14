import styles from "./createpoll.module.css";

function Createpoll() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.pollh2}>Welcome!</h2>
      <p className={styles.pollp}>
        Welcome to <span style={{color:'#0CBB5C'}}>ELECT.NG</span> Online Voting System Your account has been created
        successfully Let's Get Started
      </p>
      <button className={styles.pollbtn}>Create A Poll</button>
      <button className={styles.votebtn}>Join A Vote</button>
    </div>
  );
}

export default Createpoll;
