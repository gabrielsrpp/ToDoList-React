import React from 'react';

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
          <h1>React + TS ToDo</h1>
        </div>
      </header>
  );
}

export default Header