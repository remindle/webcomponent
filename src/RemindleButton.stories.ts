import { html } from 'lit';

import { Meta, Story } from '@storybook/web-components';

import { ButtonVariants, RemidleButton } from './remindle-button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Remindle/Button',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    variant: {
      options: ButtonVariants,
      control: { type: 'radio' }
    },
    label: String
  },
} as Meta;

type Props = {
  variant: ButtonVariants,
  label: String
}

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<Props> = ({ variant, label }: Props) => html`<remindle-button variant=${variant}>${label}</remindle-button>`;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  variant: ButtonVariants.PRIMARY,
  label: 'PrimaryButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariants.SECONDARY,
  label: 'SecondaryButton',
};
