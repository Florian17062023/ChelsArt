
import '../styles/globals.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Layout from './layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
