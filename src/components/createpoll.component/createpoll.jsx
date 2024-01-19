import { Link } from "react-router-dom/dist";
import Search from "../search.component/search";
import styles from "./createpoll.module.css";

function Createpoll() {
  return (
    <div className={styles.wrapper}>
      <Search />
      <h2 className={styles.pollh2}>Welcome!</h2>
      <p className={styles.pollp}>
        Welcome to <span style={{color:'#0CBB5C'}}>ELECT.NG</span> Online Voting System Your account has been created
        successfully Let's Get Started
      </p>
      <Link to='/createapoll'><button className={styles.pollbtn}>Create A Poll</button></Link>
      <Link to='/joinavote'><button className={styles.votebtn}>Join A Vote</button></Link> 
    </div>
  );
}

export default Createpoll;
