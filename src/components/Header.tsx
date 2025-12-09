import styles from "@/styles/components/Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.mainTitle}>AI와 더 잘 대화하는 법</h1>
            <p className={styles.subTitle}>비개발자를 위한 실전 AI 활용 가이드</p>
        </header>
    );
}
