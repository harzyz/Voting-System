import { useRef } from 'react';
import styles from './createapoll.module.css'
import { LuUpload } from "react-icons/lu";
import { Link } from 'react-router-dom/dist';

function CreateAPoll() {
  const inputRef = useRef(null);

  const handleImgUpload = () => {
    console.log(inputRef);
    inputRef.current.click();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.pollh2}>Create A Poll</h2>
      <p>Fill in the fields belows to create a poll</p>
      <form className={styles.pollform}>
        <label className={styles.formlabel}>Poll Title</label>
        <input className={styles.pollinput} type="text" placeholder='Type your poll title ' />
        <label className={styles.formlabel}>Poll Images</label>
        <div className={styles.pollimgupload}>
          <input  type="file" ref={inputRef} />
          <LuUpload className={styles.imguploadicon} onClick={handleImgUpload} />
        </div>
        <label className={styles.formlabel}>Voting Type</label>
        <input className={styles.pollinput} type="text" />
        <div className={styles.smallinputs}>
          <span className={styles.pollinputdate}>
            <label className={styles.formlabel}>Start Date</label>
            <input className={styles.pollinput} type="date" />
          </span>
          <span className={styles.pollinputtime}>
            <label className={styles.formlabel}>Time</label>
            <input className={styles.pollinput} type="text" placeholder='00:00' />
          </span>
        </div>
        <div className={styles.smallinputs}>
          <span className={styles.pollinputdate}>
            <label className={styles.formlabel}>End Date</label>
            <input className={styles.pollinput} type="date" />
          </span>
          <span className={styles.pollinputtime}>
            <label className={styles.formlabel}>Time</label>
            <input className={styles.pollinput} type="text" placeholder='00:00' />
          </span>
        </div>
        <label className={styles.formlabel}>Voting Restrictions</label>
        <input className={styles.pollinput} type="text" />
        <Link to='/pollupload'><button className={styles.pollbtn} type='submit'>Create A Poll</button></Link>
      </form>
    </div>
  )
}

export default CreateAPoll
