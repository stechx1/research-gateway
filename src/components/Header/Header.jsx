import { Image, Menu } from 'antd';
import { StyledHeader } from './elements';

export const Header = () => {
  return (
    <StyledHeader>
      <Image src='/images/research-gateway.svg' />
      <Menu
        theme='dark'
        mode='horizontal'
      />
    </StyledHeader>
  );
};
