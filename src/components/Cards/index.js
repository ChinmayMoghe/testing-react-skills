import randomColor from 'randomcolor';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
const Cards = () => {
  const [word, setWord] = useState('');
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div className={styles['container']}>
      <nav className={styles['nav']}>
        <Link className={styles['nav-link']} to='/home'>
          Main Page
        </Link>
        <Link className={styles['nav-link']} to='/task-2'>
          Task 2
        </Link>
      </nav>
      <aside className={`${styles.sidebar} ${navOpen ? styles['open'] : styles['close']}`}>
      </aside>
      <main className={`${styles['main-section']} ${navOpen ? styles['open'] : styles['close']}`}>
        <section className={styles['input-container']}>
          <div className={styles.buttonContainer}><button className={`${styles.navButton} ${navOpen ? styles['open'] : styles['close']}`} type="button" onClick={() => setnavOpen(!navOpen)}></button></div>
          <input value={word} onChange={(event) => setWord(event.target.value)} className={styles['text-input']} type='text' name='' id='' />
          <div className={styles['cards-container']}>
            {word && word.split('').map((letter, index) => <div key={btoa(letter + index)} style={{ backgroundColor: (index + 1) % 3 === 0 ? randomColor({}) : null }} className={styles['card']}>{letter}</div>)}
          </div>
        </section>
      </main>
    </div >
  );
};

export default Cards;
