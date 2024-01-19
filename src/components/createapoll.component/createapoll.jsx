import { useRef } from 'react';
import styles from './createapoll.module.css'
import { LuUpload } from "react-icons/lu";
import { Link } from 'react-router-dom/dist';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import { SlCalender } from "react-icons/sl";
import { CiStopwatch } from "react-icons/ci";

function CreateAPoll() {
  const inputRef = useRef(null);

  const handleImgUpload = () => {
    console.log(inputRef);
    inputRef.current.click();
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pollh2}>Create A Poll</h1>
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
            <div className={styles.datepicker}><DatePicker className={styles.pollinputred} placeholderText="dd/mm/yyyy" />
            <SlCalender className={styles.callender} />
            </div>
          </span>
          <span className={styles.pollinputtime}>
            <label className={styles.formlabel}>Time</label>
            <div className={styles.datepicker}><input className={styles.pollinput} type="text" placeholder='00:00' />
            <CiStopwatch className={styles.stopwatch} />
            </div>
          </span>
        </div>
        <div className={styles.smallinputs}>
          <span className={styles.pollinputdate}>
            <label className={styles.formlabel}>End Date</label>
            <div className={styles.datepicker}><DatePicker className={styles.pollinputred} placeholderText="dd/mm/yyyy" />
            <SlCalender className={styles.callender} />
            </div>
          </span>
          <span className={styles.pollinputtime}>
            <label className={styles.formlabel}>Time</label>
            <div className={styles.datepicker}><input className={styles.pollinput} type="text" placeholder='00:00' />
            <CiStopwatch className={styles.stopwatch} />
            </div>
          </span>
        </div>
        <label className={styles.formlabel}>Voting Restrictions</label>
        <input className={styles.pollinput} type="text" />
        <Link className={styles.pollbtnlink} to='/pollupload'><button className={styles.pollbtn} type='submit'>Create A Poll</button></Link>
      </form>
    </div>
  )
}

export default CreateAPoll
