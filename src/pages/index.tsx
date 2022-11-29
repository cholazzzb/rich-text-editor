import Link from 'next/link';
import Layout from 'src/presentational/components/Layout';
import styles from 'src/presentational/styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Welcome to Rich Text Editor!</h1>
      <div className={styles.grid}>
        <Link href="/docs" className={styles.card}>
          <h2>Docs &rarr;</h2>
          <p>Create Docs with Rich Text Editor!</p>
        </Link>
      </div>
    </Layout>
  );
}
