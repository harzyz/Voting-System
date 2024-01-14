import styles from './uploadfiles.module.css'
import { UploadFilesData, CompletedUpload } from "./uploadfilesdata"

function Uploadfiles() {
  return (
    <div>
      <h1 className={styles.uploadh1}>Upload Files</h1>
      <p className={styles.uploadp}>UPLOADING</p>

      <div className={styles.candidateswrapper}>
        {UploadFilesData.map((item)=>(
        <div className={styles.candidatescontainer} key={item.id}>
          <div className={styles.candidatesimage}><img src={item.image} alt={item.alternative} /></div>
          <div>
            <h2 className={styles.uploadh1}>{item.imagepath}</h2>
            <p className={styles.uploadp}>{item.status}</p>
          </div>
        </div>
        ))}
      </div>

      <h2 className={styles.uploadh2}>Completed</h2>
        
      <div className={styles.candidateswrapper}>
        {CompletedUpload.map((item)=>(
        <div className={styles.candidatescontainer} key={item.id}>
          <div className={styles.candidatesimage}><img src={item.image} alt={item.alternative} /></div>
          <div>
            <h2 className={styles.uploadh1}>{item.imagepath}</h2>
            <p className={styles.uploadp}>2.7MB of 5MB</p>
          </div>
        </div>
        ))}
      </div>

      <button className={styles.uploadbtn}>Done</button>

    </div>
  )
}

export default Uploadfiles
