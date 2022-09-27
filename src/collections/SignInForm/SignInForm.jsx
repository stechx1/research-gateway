import { Form, Image, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import {
  StyledFormContainer,
  StyledInput,
  StyledInputPassword,
  StyledLink,
  StyledFormItem,
} from './elements';
import Button from '../../components/Button/Button';
import { useRouter } from 'next/router';

const SignInForm = () => {
  const router = useRouter();
  const onFinish = (values) => {
    console.log('Success:', values);
    router.push("/my-projects")
  };
  return (
    <StyledFormContainer>
      <h1 style={{ fontSize: '24px' }}>Sign In</h1>
      <img
        src='/images/Colored-bars.svg'
        width={'100px'}
        style={{ marginTop: '-5px', marginBottom: '20px' }}
      />
      <Form name='sign-in' onFinish={onFinish} layout='vertical'>
        <StyledFormItem
          name='username'
          label='Enter Username'
          rules={[
            {
              required: true,
              message: 'Incorrect username. Please try again!',
            },
          ]}
        >
          <StyledInput
            placeholder='Username'
            prefix={<Icon component={() => <img src='/icons/user.svg' />} />}
          />
        </StyledFormItem>
        <StyledFormItem
          name='password'
          label='Enter Password'
          rules={[
            { required: true, message: 'Incorrect password. try again!' },
          ]}
        >
          <StyledInputPassword
            type='password'
            placeholder='Password'
            prefix={<Icon component={() => <img src='/icons/lock.svg' />} />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </StyledFormItem>
        <div
          style={{
            textAlign: 'right',
            marginTop: '6px',
            marginBottom: '24px',
          }}
        >
          <StyledLink onClick={() => console.log('Forgot Password')}>
            Forgot Password?
          </StyledLink>
        </div>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </StyledFormContainer>
  );
};

export default SignInForm;
