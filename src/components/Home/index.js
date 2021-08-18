import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header>
        <h1 className={styles['company-name']}>Smart cows Assessment</h1>
      </header>
      <ul className={styles['task-list']}>
        <li className={styles['task-list-item']}><Link to='/task-1'>Task 1</Link></li>
        <li className={styles['task-list-item']}><Link to='/task-2'>Task 2</Link></li>
      </ul>
    </>
  );
};

export default Home;
