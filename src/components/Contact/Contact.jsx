import styles from "./Contact.module.css";
import {getImagesUrl} from "../../../utils.js";


export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImagesUrl("contact/emailIcon.png")} alt="email"/>
          <a href="mailto:makcumka9111@yandex.ru">makcumka9111@yandex.ru</a>
        </li>
        <li className={styles.link}>
          <img src={getImagesUrl("contact/linkedinIcon.png")} alt="linkedin"/>
          <a href="#">In process</a>
        </li>
        <li className={styles.link}>
          <img src={getImagesUrl("contact/githubIcon.png")} alt="GitHub"/>
          <a href="http://github.com/MakcPokrovskiy">GitHub.com/MakcPokrovskiy</a>
        </li>
      </ul>
    </footer>
  )
}