import { useState } from "react";
import styles from "./firstslide.module.css";
import firstslidepic from "../../../images/pana.png";
import secondslidepic from "../../../images/secondslide.png";
import thirdslidepic from "../../../images/thirdslide.png";
import bar1 from "../../../images/firstslidebar.png";
import bar2 from "../../../images/secondslidebar.png";
import bar3 from "../../../images/thirdslidebar.png";
import { Link } from "react-router-dom/dist";


function Firstslide() {
  const [firstslide, setFirstslide] = useState(true)
  const [secondslide, setSecondslide] = useState(false)
  const [thirdslide, setThirdslide] = useState(false)

  const skiptosecond = () => {
    setFirstslide(false)
    setSecondslide(true)
  }

  const skiptothird = () => {
    setSecondslide(false)
    setThirdslide(true)
  }
  return (
    <>
    {firstslide && (
      <div className={styles.wrapper}>
      <div className={styles.onboardingimage1}>
        <img src={firstslidepic} alt="" />
      </div>
      <h1 className={styles.firstslideh1}>Cast Your Vote</h1>
      <p className={styles.firstslidep}>
        Exercise your voting right, let your <br /> voice be heard with the right vote
      </p>
      <div className={styles.nxtpage}>
        <div>
          <img src={bar1} alt="" />
        </div>
        <button onClick={skiptosecond} className={styles.nxtBtn}>Next</button>
      </div>
      <Link to='/signup'><p className={styles.skip}>Skip</p></Link>
    </div>
    )}

    {secondslide && (
      <div className={styles.wrapper}>
      <div className={styles.onboardingimage1}>
        <img src={secondslidepic} alt="" />
      </div>
      <h1 className={styles.firstslideh1}>Make Your Vote Count</h1>
      <p className={styles.firstslidep}>
        Register and vote from anywhere around <br /> the world
      </p>
      <div className={styles.nxtpage}>
        <div>
          <img src={bar2} alt="" />
        </div>
        <button onClick={skiptothird} className={styles.nxtBtn}>Next</button>
      </div>
      <Link to='/signup'><p className={styles.skip}>Skip</p></Link>
    </div>
    )}

    {thirdslide && (
      <div className={styles.wrapper}>
      <div className={styles.onboardingimage1}>
        <img src={thirdslidepic} alt="" />
      </div>
      <h1 className={styles.firstslideh1}>Stay Informed</h1>
      <p className={styles.firstslidep}>
        Stay informed and get the latest news<br /> around you about your elections.
      </p>
      <div className={styles.nxtpage}>
        <div>
          <img src={bar3} alt="" />
        </div>
        <Link to='/signup'><button className={styles.createBtn}>Create Account</button></Link>
        <Link to='/login'><button className={styles.nxtBtn}>Log In</button></Link>
      </div>
      <Link to='/signup'><p className={styles.skip}>Skip</p></Link>
    </div>
    )}
    </>
  );
}

export default Firstslide;
