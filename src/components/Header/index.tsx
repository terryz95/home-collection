import React from 'react';
import styles from './header.module.scss';

export default function Banner() {
  const title = window.document.title
  return <header className={styles.h}>
    <h1 data-text={title}>{ title }</h1>
  </header>
}