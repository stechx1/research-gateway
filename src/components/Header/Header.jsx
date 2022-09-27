import { Image, Menu } from 'antd';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { StyledHeader, StyledMenu } from './elements';

export const Header = () => {
  const router = useRouter();
  const authRoute = ['/sign-in'];
  return (
    <>
      {authRoute.includes(router.route) && (
        <StyledHeader>
          <Image src='/images/research-gateway.svg' />
          <Menu theme='dark' mode='horizontal' />
        </StyledHeader>
      )}

      {!authRoute.includes(router.route) && (
        <StyledHeader>
          <StyledMenu
            // style={{ background: '#232f3e' }}
            defaultSelectedKeys={["1"]}
            theme='dark'
            mode='horizontal'
          >
            <Menu.Item key='0'>
              <Image src='/images/research-gateway.svg' />
            </Menu.Item>
            <Menu.Item key='1'>
              <Link href="/">
              My Projects
              </Link>
              </Menu.Item>
            <Menu.Item key='2'>
            <Link href="/study">
              Study
              </Link>
            </Menu.Item>
            <Menu.Item key='3'>
            <Link href="/key-pairs">
              Key Pairs
              </Link>
            </Menu.Item>
          </StyledMenu>
        </StyledHeader>
      )}
    </>
  );
};
