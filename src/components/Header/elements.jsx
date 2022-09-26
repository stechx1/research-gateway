import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;

export const StyledHeader = styled((props) => {
  return <Header {...props} />;
})`
  background: #232f3e;
`;
