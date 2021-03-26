import React from 'react';
import styles from './pillow-item.module.scss';

export interface PillowItemProps {
  title: string
  url: string
  description?: string
  icon?: string
}

export default function PillowItem(props: PillowItemProps) {
  return <div className={styles['pillow-item']}>
    <a href={props.url}>
      <img className={styles['pillow-item__icon']} src={props.icon} alt={props.title} />
      <h4 className={styles['pillow-item__title']}>{props.title}</h4>
      {props.description && <div className={styles['pillow-item__desc']}>{props.description}</div>}
    </a>
  </div>
}
