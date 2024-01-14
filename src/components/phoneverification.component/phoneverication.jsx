import styles from "./phoneverication.module.css";

function Phoneverication() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h1 className={styles.createh1}>Elect.NG</h1>
        <h3 className={styles.phoneh3}>Phone Number Verification</h3>
        <p className={styles.phonep}>
          We've sent a 6- digit OTP code to 09139*****1 Please input the code
          here to verify your phone number.s
        </p>
        <form className={styles.createform}>
          <input type="text" placeholder="6-4-2-3-8-1" />
          <p>OTP expires in 3:54</p>
          <button type="submit">Verify Phone Number</button>
        </form>
      </div>
    </div>
  );
}

export default Phoneverication;
