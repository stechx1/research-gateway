import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
const { Content } = Layout;

import { Header, AntFooter } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <AntFooter />
    </Layout>
  );
}

export default MyApp;
