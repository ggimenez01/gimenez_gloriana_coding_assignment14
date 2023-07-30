import React from 'react';
import { Meta, Story } from '@storybook/react';

import Img, { ImgProps } from './Img';

export default {
  title: 'Img',
  component: Img,
} as Meta;

const Template: Story<ImgProps> = args => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://example.com/image.png',
  alt: 'Example Image',
  text: 'Image Text',
  backgroundColor: '#f2f2f2',
  disabled: false,
};
