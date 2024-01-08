import styles from "./About.module.css";
import {getImagesUrl} from "../../../utils.js";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg} src={getImagesUrl("about/cartoon.png")} alt="me setting"/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImagesUrl("about/cursorIcon.png")} alt="cursorIcon"/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I’m a front-end developer with experience
                in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImagesUrl("about/serverIcon.png")} alt="serverIcon"/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I plan in the future to gain experience in rapid development and
                optimized server systems and APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImagesUrl("about/uiIcon.png")} alt="uiIcon"/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>Not a designer, but I love high-quality landing page designs</p>
            </div>

          </li>
        </ul>
      </div>
    </section>
  )
}