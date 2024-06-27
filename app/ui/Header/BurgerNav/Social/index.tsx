import styles from "./style.module.scss";
import { socialItems } from "@/app/common/data";

export default function index() {
  return (
    <div className={styles.social}>
      <div className={styles.header}>
        <div className={styles.line}></div>
        <h5>Contact</h5>
      </div>
      <ul className={styles.items}>
        {socialItems.map((item, index) => {
          return (
            <li key={index} className={styles.item}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <span className={styles.underline}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
