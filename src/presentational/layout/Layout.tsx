import Head from 'next/head';
import { FunctionComponent, PropsWithChildren } from 'react';

import styles from 'src/presentational/styles/Home.module.css';

type LayoutProps = {};

export const Layout: FunctionComponent<PropsWithChildren<LayoutProps>> = (
  props,
) => {
  return (
    <div>
      <Head>
        <title>Rich Text Editor</title>
        <meta name="description" content="Rich Text Editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{props.children}</main>
    </div>
  );
};
