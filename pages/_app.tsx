import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import store from '../store/store';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;

