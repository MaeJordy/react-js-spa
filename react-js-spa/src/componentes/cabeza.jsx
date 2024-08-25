import React, { useState } from 'react';
import './App.css'; //

  const Logo = () => {
  const [size, setSize] = useState('normal');

  return (
    <img
      src="/path/to/logo.png"
      alt="Logotipo"
      className={size}
      onMouseEnter={() => setSize('large')}
      onMouseLeave={() => setSize('normal')}
    />
  );
};

export default Logo;
