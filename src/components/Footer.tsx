import styles from './modules/Footer.module.css'



const Footer = () => {
  return (
    <footer>
      <div id="footer" className={styles["footer-container"]}>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <a className={styles["footer-a"]} href="./index.html">Ofertas</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Laptops</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Audio</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Auriculares</a>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <a className={styles["footer-a"]} href="./index.html">Cómo comprar</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Formas de pago</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Envios</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Devoluciones</a>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <a className={styles["footer-a"]} href="./index.html">Costos y tarifas</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Impuestos</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Facturación</a>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <a className={styles["footer-a"]} href="./index.html">Mis pedidos</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Pedir nuevamente</a>
          </li>
          <li className={styles["footer-li"]}>
            <a className={styles["footer-a"]} href="./index.html">Lista de deseos</a>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <a className={styles["footer-a"]} href="./index.html">Garantía</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-copyright"]}>React 2024</div>
    </footer>
  )
}

export default Footer