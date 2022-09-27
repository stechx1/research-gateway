import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
const { Content } = Layout;

import { Header, Footer } from '../components';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Layout style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
