import styles from './modules/NavButton.module.css'

const NavButton = () => {
  return (
    <>
      <nav id={styles["navbar"]}>
        <li className={styles["nav-li"]}>
          <a className={styles["nav-a"]} href="#">Ofertas</a>
        </li>
        <li className={styles["nav-li"]}>
          <a className={styles["nav-a"]} href="#">Cómo comprar</a>
        </li>
        <li className={styles["nav-li"]}>
          <a className={styles["nav-a"]} href="#">Costos y tarifas</a>
        </li>
        <li className={styles["nav-li"]}>
          <a className={styles["nav-a"]} href="#">Mis pedidos</a>
        </li>
        <li className={styles["nav-li"]}>
          <a className={styles["nav-a"]} href="#">Garantía</a>
        </li>
      </nav>
    </>
  )
}

export default NavButton