import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
const { Content } = Layout;

import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Layout>
  );
}

export default MyApp;
