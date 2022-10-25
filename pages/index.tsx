import type { NextPage } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Main from '../components/Main';
import { PEXELS_URL } from '../utils/constants';

const Home: NextPage = ({photos}) => {

  return (
    <div>
      <Head>
        <title>Interview Frontend App</title>
      </Head>
      <Main photos={photos} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await axios.get(PEXELS_URL, {
    headers: {
      Authorization: process.env.API_KEY,
    },
    params: {
      query: 'dogs',
    },
  });
  
  return {
    props: {
      photos: data,
    }
  };
};
