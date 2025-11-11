import React, { useState } from 'react';

const PostLengthFilter = ({ setMaxLength }) => {
  const [currentValue, setCurrentValue] = useState(20);

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
    setMaxLength(newValue); // Передаем значение обратно в родительский компонент
  };

  return (
    <div>
      <label htmlFor="length-filter">Максимальная длина заголовка:</label>
      <input
        type="number"
        id="length-filter"
        value={currentValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default PostLengthFilter;