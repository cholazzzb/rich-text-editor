import Link from 'next/link';
import { Center } from 'src/presentational/layout/common';
import { Layout } from 'src/presentational/layout/Layout';
import styles from 'src/presentational/styles/Home.module.css';
import { mainStiches } from 'src/presentational/themes';

export default function Home() {
  return (
    <Layout>
      <Container>
        <h1 className={styles.title}>Welcome to Rich Text Editor!</h1>
        <div className={styles.grid}>
          <Link href="/doc" className={styles.card}>
            <h2>Doc &rarr;</h2>
            <p>Create Docs with Rich Text Editor!</p>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}

const Container = mainStiches.styled(Center, {
  height: '100vh',
  width: '100%',
  flexDirection: 'column',
});
