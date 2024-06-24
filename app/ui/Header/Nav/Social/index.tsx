import styles from "./style.module.scss";
import { socialItems } from "@/app/common/data";

export default function index() {
  return (
    <div className={styles.social}>
      <div className={styles.header}>
        <div className={styles.line}></div>
        <h5>Contact</h5>
      </div>
      <div className={styles.items}>
        {socialItems.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className={styles.item}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
