import styles from "./Experience.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import {getImagesUrl} from "../../../utils.js";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
            skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill} >
                  <div className={styles.skillImageContainer}>
                    <img src={getImagesUrl(skill.imageSrc)} alt={skill.title}/>
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })
          }
        </div>
        <ul className={styles.history}>
          {
            history.map((elem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <img src={getImagesUrl(elem.imageSrc)} alt={elem.role}/>
                  <div className={styles.historyItemDetails}>
                    <h3>{`${elem.role}, ${elem.organisation}`}</h3>
                    <p>{`${elem.startDate}, ${elem.andDate}`}</p>
                    <ul>
                      {
                        elem.experiences.map((elem, id) => {
                          return (
                            <li key={id}>
                              {elem}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}