import styled from 'styled-components';
import { Layout } from 'antd';
const { Footer } = Layout;

export const StyledFooter = styled((props) => {
  return <Footer {...props} />;
})
`
  background: #232f3e;
  padding: 6px 50px;
  color: #fff;
`;
