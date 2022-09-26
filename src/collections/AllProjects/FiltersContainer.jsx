import { Button, Select } from 'antd';
import {PlusOutlined} from "@ant-design/icons"
const { Option } = Select;
import { StyledButton, StyledFiltersContainer, StyledSelect } from './elements';

export const FiltersContainer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledFiltersContainer>
      <StyledSelect
        defaultValue='lucy'
        onChange={handleChange}
      >
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='Yiminghe'>yiminghe</Option>
      </StyledSelect>
      <StyledButton icon={<PlusOutlined />}>Add More</StyledButton>
    </StyledFiltersContainer>
  );
};
