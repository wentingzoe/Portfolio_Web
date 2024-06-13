import styles from "./style.module.scss";

export default function index() {
  const socialItems = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/wentingyong/",
    },
    {
      title: "GitHub",
      href: "https://github.com/wentingzoe",
    },
    {
      title: "Email",
      href: "mailto:ywtzoe@gmail.com",
    },
  ];
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
