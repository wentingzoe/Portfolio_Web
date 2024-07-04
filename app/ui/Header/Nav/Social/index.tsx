import styles from "./style.module.scss";
import { socialItems } from "@/app/lib/data";

export default function index() {
  return (
    <div className={styles.social}>
      <div className={styles.social__stripe} />
      <h5>Contact</h5>

      <ul className={styles.social__wrap}>
        {socialItems.map((item, index) => {
          return (
            <li key={index} className={styles.social__item}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <span className={styles.social__underline}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
