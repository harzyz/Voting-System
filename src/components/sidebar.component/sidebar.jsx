import { useState } from "react";
import styles from "./sidebar.module.css";
import { FiHome } from "react-icons/fi";
import { TbThumbUp } from "react-icons/tb";
import { PiChartPieSlice } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.navwrapper}>
      <h1 className={styles.sidebarh1}>Elect.NG</h1>
      <div className={styles.wrapper}>
        <ul className={styles.sidebarlist}>
          <li
            onClick={() => setActive((prev) => !prev)}
            className={active ? styles.listitembg : styles.listitem}>
            <FiHome className={styles.listicon} />
            <p>Dashboard</p>
          </li>
          <li className={styles.listitem}>
            <TbThumbUp className={styles.listicon} />
            <p>Vote</p>
          </li>
          <li className={styles.listitem}>
            <PiChartPieSlice className={styles.listicon} />
            <p>Statistics</p>
          </li>
          <li className={styles.listitem}>
            <IoPersonOutline className={styles.listicon} />
            <p>Profile Setting</p>
          </li>
        </ul>

        <div className={styles.listitem}>
          <FiLogOut style={{ color: "green" }} className={styles.listicon} />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
