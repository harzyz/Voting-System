import { useRef } from "react";
import styles from "./polluploads.module.css";
import { LuUpload } from "react-icons/lu";

function Polluploads() {
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
        <input
          className={styles.pollinput}
          type="text"
          placeholder="Type your poll title "
        />
        <label className={styles.formlabel}>Poll Description</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div style={{ display: "flex", gap: '22px', justifyContent:'center' }}>
          <div className={styles.uploadgroup}>
            <div className={styles.pollimgupload}>
              <input type="file" ref={inputRef} />
              <LuUpload
                className={styles.imguploadicon}
                onClick={handleImgUpload}
              />
              <p>Drag Files to upload</p>
            </div>
            <button className={styles.browsefilebtn} onClick={handleImgUpload}>
              Browse files
            </button>
          </div>
          <div className={styles.uploadgroup}>
            <div className={styles.pollimgupload}>
              <input type="file" ref={inputRef} />
              <LuUpload
                className={styles.imguploadicon}
                onClick={handleImgUpload}
              />
              <p>Drag Files to upload</p>
            </div>
            <button className={styles.browsefilebtn} onClick={handleImgUpload}>
              Browse files
            </button>
          </div>
        </div>
        <div style={{ display: "flex", gap: '22px', justifyContent:'center' }}>
          <div className={styles.uploadgroup}>
            <div className={styles.pollimgupload}>
              <input type="file" ref={inputRef} />
              <LuUpload
                className={styles.imguploadicon}
                onClick={handleImgUpload}
              />
              <p>Drag Files to upload</p>
            </div>
            <button className={styles.browsefilebtn} onClick={handleImgUpload}>
              Browse files
            </button>
          </div>
          <div className={styles.uploadgroup}>
            <div className={styles.pollimgupload}>
              <input type="file" ref={inputRef} />
              <LuUpload
                className={styles.imguploadicon}
                onClick={handleImgUpload}
              />
              <p>Drag Files to upload</p>
            </div>
            <button className={styles.browsefilebtn} onClick={handleImgUpload}>
              Browse files
            </button>
          </div>
        </div>
        <button className={styles.pollbtn} type="submit">
          Add A File
        </button>
      </form>
    </div>
  );
}

export default Polluploads;
