import { useState } from 'react'
import styles from './statisticsoptions.module.css'
import { statisticsoptiondata } from './statisticsoptionsdata'

function Statisticsoptions() {
  const [selectedOption, setSelectedOption] = useState([])

  // const handleOptionClick = (index) => {
  //   setSelectedOption(index);
  // }

  const handleOptionToggle = (index) => {
    const updatedOptions = [...selectedOption];
    if (updatedOptions.includes(index)) {
      // If already selected, remove from the array
      updatedOptions.splice(updatedOptions.indexOf(index), 1);
    } else {
      // If not selected, add to the array
      updatedOptions.push(index);
    }
    setSelectedOption(updatedOptions);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        {statisticsoptiondata.map((item, index)=>(
          <div className={`${styles.selection} ${selectedOption.includes(index) ? styles.hilighted : ''}`}
          onClick={() => handleOptionToggle(index)} 
          key={item.id}>
            <input type="checkbox" 
            checked={selectedOption.includes(index)}
            onChange={() => handleOptionToggle(index)}
            name="" id="" />
            <h3>{item.category}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statisticsoptions
