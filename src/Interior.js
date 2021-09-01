import styles from "./interior.module.scss";
import "./icon.scss";
const Interior = (props) => {

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.overview}>
          <h1 className={styles.overviewTitle}>This interior</h1>
        </div>
        <nav>
          <ul className={props.menu ? styles.listOverviewOpen : styles.listOverview}>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                Home
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">Collection</a>
            </li>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                About
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                Contact
              </a>
            </li>
          </ul>
          <i
            onClick={props.handleMenuClick}
            className={`${props.menu ?  "fas fa-times" : "fal fa-bars" }`}
          />
        </nav>
      </header>

      <section className={styles.section}>
        <div className={styles.intro}>
          <div className={styles.title}>Modern interior</div>
          <div className={styles.desc}>
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </div>
          <button className={styles.button}>
            Read more
            <span style={{ marginLeft: "1rem" }} className="material-icons">
              trending_flat
            </span>
          </button>
        </div>
        <div className={styles.imgwrap}>
          <img className={styles.img1} src="photo1.png" alt="photo1" />
          <div className={styles.card}>
            <div className={styles.cardProfile}>
              <img className={styles.img2} src="photo2.png" alt="photo2" />
              <div className={styles.cardOverview}>
                <div className={styles.cardName}>Aliza Webber</div>
                <div className={styles.cardJob}>Interior designer</div>
              </div>
            </div>
            <div className={styles.cardDesc}>
              Designed in 2020 by Aliza Webber
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        created by <b className={styles.username}>shinghuey27</b> -
        devChallenges.io
      </footer>
    </main>
  );
};

export default Interior;
