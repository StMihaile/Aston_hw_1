import React, { useState } from 'react';
import styles from './PostLengthFilter.module.css';

const PostLengthFilter = ({ setMaxLength }) => {
  const [currentValue, setCurrentValue] = useState(20);

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
    setMaxLength(newValue);
  };

  return (
    <div className={styles.filterBox}>
      <label htmlFor="length-filter" className={styles.label}>
        Макс. длина заголовка:
      </label>
      <input
        type="number"
        min={1} max={100}
        id="length-filter"
        value={currentValue}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};
export default PostLengthFilter;