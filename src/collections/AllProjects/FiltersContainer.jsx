import { Button, Form, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
import { StyledButton, StyledFiltersContainer, StyledSelect } from './elements';

export const FiltersContainer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledFiltersContainer>
      <Form.Item label='Sort By'>
        <StyledSelect
          ariaLabel='sort by'
          ariaHidden={true}
          defaultValue='Sort By'
          onChange={handleChange}
        >
          <Option value='paused'>Paused</Option>
          <Option value='active'>Active</Option>
          <Option value='lowToHigh'>Budget: Low to High</Option>
          <Option value='HighToLow'>Budget: High to Low</Option>
        </StyledSelect>
      </Form.Item>
      <StyledButton icon={<PlusOutlined />}>Add More</StyledButton>
    </StyledFiltersContainer>
  );
};
