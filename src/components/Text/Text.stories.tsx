import React from 'react';
import { Meta, Story } from '@storybook/react';

import Text, { TextProps } from './Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Example Text',
  fontSize: '16px',
  fontColor: '#000',
  backgroundColor: '#fff',
  disabled: false,
};
