import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { Button } from './Button';

export default {
  title: 'Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Defines the background-color of the element'
    },
    label: {
      control: 'text',
      defaultValue: { summary: 'Button' },
      description: 'Defines the text shown in the element'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: { summary: 'medium' },
      description: 'Defines the height and width of the element'
    },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {};

export const Large = {
  args: {
    size: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};

export const clickButton = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('btn'));

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};