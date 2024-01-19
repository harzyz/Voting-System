import { Link } from 'react-router-dom'
import styles from './uploadfiles.module.css'
import { UploadFilesData, CompletedUpload } from "./uploadfilesdata"

function Uploadfiles() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h1 className={styles.uploadh1}>Upload Files</h1>
        <p className={styles.uploadp}>UPLOADING</p>

        <div className={styles.candidateswrapper}>
          {UploadFilesData.map((item)=>(
          <div className={styles.candidatescontainer} key={item.id}>
            <div className={styles.candidatesimage}><img src={item.image} alt={item.alternative} /></div>
            <div>
              <h2 className={styles.uploadh2}>{item.imagepath}</h2>
              <p className={styles.uploadp}>{item.status}</p>
            </div>
          </div>
          ))}
        </div>

        <h2 className={styles.uploadp}>Completed</h2>
          
        <div className={styles.candidateswrapper}>
          {CompletedUpload.map((item)=>(
          <div className={styles.candidatescontainer} key={item.id}>
            <div className={styles.candidatesimage}><img src={item.image} alt={item.alternative} /></div>
            <div>
              <h2 className={styles.uploadh2}>{item.imagepath}</h2>
              <p className={styles.uploadp}>2.7MB of 5MB</p>
            </div>
          </div>
          ))}
        </div>
      </div>

      <Link className={styles.uploadbtnlink} to="/succespage">
        <button className={styles.uploadbtn}>Done</button>
      </Link>

    </div>
  )
}

export default Uploadfiles
