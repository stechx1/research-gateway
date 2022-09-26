import { Layout } from 'antd'
const { Content } = Layout;

import { LogoHeader, AntFooter } from '../components';

export default function Home() {
  return (
    <Layout>
      <LogoHeader/>
      <Content>Content of the site</Content>
      <AntFooter />
    </Layout>
  );
}
