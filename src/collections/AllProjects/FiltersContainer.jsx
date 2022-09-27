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
        <StyledSelect defaultValue='Sort By' onChange={handleChange}>
          <Option ariaLabel='paused' value='paused'>
            Paused
          </Option>
          <Option ariaLabel='active' value='active'>
            Active
          </Option>
          <Option ariaLabel='lowToHigh' value='lowToHigh'>
            Budget: Low to High
          </Option>
          <Option ariaLabel='highToLow' value='HighToLow'>
            Budget: High to Low
          </Option>
        </StyledSelect>
      <StyledButton icon={<PlusOutlined />}>Add More</StyledButton>
    </StyledFiltersContainer>
  );
};
