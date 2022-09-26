import { Layout } from 'antd';
const { Content } = Layout;

import { LogoHeader, AntFooter } from '../components';

export default function Home() {
  return (
    <Layout>
      <LogoHeader />
      <Content>this is content</Content>
      <AntFooter />
    </Layout>
  );
}
