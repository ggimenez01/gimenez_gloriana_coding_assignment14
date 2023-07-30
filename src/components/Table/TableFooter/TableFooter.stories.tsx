import React from 'react';
import { Meta, Story } from '@storybook/react';

import TableFooter, { TableFooterProps } from './TableFooter';

export default {
  title: 'TableFooter',
  component: TableFooter,
} as Meta;

const Template: Story<TableFooterProps> = args => <TableFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Footer Text',
  fontSize: '16px',
  fontColor: '#000',
  backgroundColor: '#fff',
  disabled: false,
};
