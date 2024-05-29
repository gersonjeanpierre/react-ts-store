import styles from './modules/Hero.module.css'



const Hero = () => {
  return (
    <section className={styles["hero-section"]}>
      <article className={styles["hero-title"]}>
        <span className={styles["hero-span"]}>tecnología</span>
        <span className={styles["hero-span"]}>renovada</span>
      </article>
    </section>
  )
}

export default Hero