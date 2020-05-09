import React, { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import ListComponent from '../components/list'
import StatusComponent from '../components/status';

interface FrameworkList {
  list: string[];
}

function getList(): string[] {
  return [
    'Angular Universal',
    'Next.js'
  ]
}

export const getServerSideProps: GetServerSideProps<FrameworkList> = async (context) => {
  let list = await getList();
  return {
      props: {
          list: list
      }
  };
};

const IndexPage: FunctionComponent<FrameworkList> = (props) => {
  const [status, setStaus] = React.useState(false);
  return (
    <div>
      <Head>
        <title>Eval Next.js SSR with Dynamic Content</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Eval Next.js SSR with Dynamic Content</h1>
        <section><StatusComponent status={ true }/></section>
        <section><ListComponent list={ props.list }/></section>
      </main>
    </div>
  );
};

export default IndexPage;