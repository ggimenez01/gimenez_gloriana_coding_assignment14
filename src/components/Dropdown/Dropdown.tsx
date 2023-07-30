import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
  options: string[];
  defaultOption?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledDropdown = styled.select<DropdownProps>`
  width: 200px;
  padding: 8px;
  background-color: ${props => (props.disabled ? '#ccc' : props.backgroundColor || '#fff')};
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption, backgroundColor, disabled }) => {
  return (
    <StyledDropdown
      defaultValue={defaultOption}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
