import styles from './candidatesdetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { ongoingvotedetails } from '../ongoingvotesdetail.component/ongoingvotesdetailsdata'
import Modal from '../modal.component/modal';
import { useState } from 'react';

function Candidatesdetails() {

  const [open, setOpen ] = useState(false)
  const params = useParams()
  const candidate = ongoingvotedetails.find((item) =>
    item.id === Number(params.id)
  );
  
  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.candidateiamge}>
        <img src={candidate.bigpic} alt={candidate.alternative} />
      </div>

      <div className={styles.description}>
        <h2>{candidate.alternative}</h2>
        <p>{candidate.partyname}</p>
        <p>Biography</p>
        <p>{candidate.biography}</p>
      </div>
      <button className={styles.castvotebtn} onClick={()=> setOpen(true)}>Cast Vote</button>
      <Modal isOpen={open} onClose={onClose} >
        <div className={styles.content}>
          <span>
            <h1 className={styles.warning}>Warning!!</h1>
            <p>Are you sure you want to vote for <br /> this candidates? Once confirmed <br /> this action cannot be reversed.....</p>
            <div className={styles.btncontain}>
              <Link to='/votesuccess'><button className={styles.confirmbtn}>Confirm</button></Link>
              <button onClick={onClose} className={styles.cancelbtn}>Cancel</button>
            </div>
          </span>
        </div>
      </Modal>
    </div>
  )
}

export default Candidatesdetails
