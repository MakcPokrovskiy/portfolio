import styles from "./Hero.module.css";

import {getImagesUrl} from "../../../utils.js";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i'm Max </h1>
        <p className={styles.descr}>I’m a Frontend developer with 0 years
          of experience using React .
          Reach out if you’d like to learn more!</p>
        <a className={styles.contact} href="mailto:makcumka9111@yandex.ru">Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImagesUrl("hero/hero.png")} alt="hero"/>
      <div className={styles.topBlur}/>
      <div className={styles.botBlur}/>
    </section>
  )
}