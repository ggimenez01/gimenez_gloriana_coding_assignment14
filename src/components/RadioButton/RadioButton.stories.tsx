import React from 'react';
import { Meta, Story } from '@storybook/react';

import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = args => (
  <>
    <RadioButton {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  id: 'radio1',
  label: 'Radio Button',
  checked: false,
  disabled: false,
  fontSize: '16px',
  fontColor: '#000',
  backgroundColor: '#fff',
};
