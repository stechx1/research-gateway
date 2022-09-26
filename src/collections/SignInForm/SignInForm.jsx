import { Form, Image, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import {
  StyledFormContainer,
  StyledInput,
  StyledInputPassword,
  StyledLink,
} from './elements';
import Button from '../../components/Button/Button';

const SignInForm = () => {
  return (
    <StyledFormContainer>
      <h1 style={{ fontSize: '24px' }}>Sign In</h1>
      <img
        src='/images/Colored-bars.svg'
        width={'100px'}
        style={{ marginTop: '-5px', marginBottom: '20px' }}
      />
      <Form layout='vertical'>
        <Form.Item label='Enter Username'>
          <StyledInput
            placeholder='Username'
            prefix={<Icon component={() => <img src='/icons/user.svg' />} />}
          />
        </Form.Item>
        <Form.Item label='Enter Password' placeholder='Password' prefix=''>
          <StyledInputPassword
            type='password'
            placeholder='Password'
            prefix={<Icon component={() => <img src='/icons/lock.svg' />} />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <div style={{ textAlign: 'right', marginTop: '6px', marginBottom: "24px" }}>
            <StyledLink onClick={() => console.log('Forgot Password')}>
              Forgot Password?
            </StyledLink>
          </div>
          <Button>Sign In</Button>
        </Form.Item>
      </Form>
    </StyledFormContainer>
  );
};

export default SignInForm;
