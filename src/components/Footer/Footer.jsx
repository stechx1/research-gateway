import { Layout } from 'antd';
import { StyledFooter } from './elements';
const { Footer } = Layout;

export const AntFooter = () => {
  return (
    <StyledFooter style={{ textAlign: 'center' }}>
      Powered by RLCatalyst Relevance Lab Pvt. Ltd All rights reserved. 0.0.1
    </StyledFooter>
  );
};
