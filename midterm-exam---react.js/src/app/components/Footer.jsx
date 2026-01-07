import styles from './footer.module.css';
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <a href="#">Conditions of Use </a>
                <a href="#">Privacy Notice </a>
                <a href="#">Interest-Based Ads</a>
            </div>
            <div className={styles.right}>
                © 1996–2026, MyApp.com, Inc. or its affiliates
            </div>
        </footer>
    );
}