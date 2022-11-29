import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rich Text Editor</title>
        <meta name="description" content="Rich Text Editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Rich Text Editor!</h1>

        <div className={styles.grid}>
          <a href="/docs" className={styles.card}>
            <h2>Docs &rarr;</h2>
            <p>Create Docs with Rich Text Editor!</p>
          </a>
        </div>
      </main>
    </div>
  );
}
