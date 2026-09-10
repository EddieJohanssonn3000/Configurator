import styles from "./Footer.module.css"

function Footer() {
    return (
       <footer className={styles.footerBtn}>
        <button>Previous</button>
        <button>Next</button>
       </footer>
    );
}

export default Footer;
