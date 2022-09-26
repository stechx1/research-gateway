import { Input } from 'antd';
import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  /* height: 414px; */
  width: 425px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const StyledInput = styled(Input)`
  height: 45px;
  background: #F7F7F7 !important;

  &&.ant-input-affix-wrapper > input.ant-input{
    padding: 2px;
    background: #F7F7F7 !important;
  }
`;

export const StyledInputPassword = styled(Input.Password)`
  height: 45px;
  background: #F7F7F7 !important;

  &&.ant-input-affix-wrapper > input.ant-input{
    padding: 2px;
    background: #F7F7F7 !important;
  }
`;

export const StyledLink = styled.a`
  color: #3E6BFF;
  text-align: right;
  &:hover{
    text-decoration: underline;
  }
`;