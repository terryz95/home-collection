import React from "react";
import styles from "./pillow-item.module.scss";
console.log(styles)

export interface PillowItemProps {
  title: string;
  url: string;
  description?: string;
  icon?: string;
}

export default function PillowItem(props: PillowItemProps) {
  return (
    <div className={styles["pillow-item"]}>
      <div className={styles["pillow-item__inner"]}>
        <img
          className={styles["pillow-item__icon"]}
          src={props.icon}
          alt={props.title}
        />
        <a href={props.url} target="_blank" rel="noreferrer">
          <h3 className={styles["pillow-item__title"]}>{props.title}</h3>
        </a>
        {props.description && (
          <div className={styles["pillow-item__desc"]}>{props.description}</div>
        )}
      </div>
    </div>
  );
}
