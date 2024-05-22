import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { TextField, TextFieldProps } from './TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
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
  args: {
    onChange: fn(),
    onInput: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small'
  }
};

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large'
  }
};


export const FillTextField = {
  play: async ({ args, canvasElement }: { args: TextFieldProps, canvasElement: HTMLCanvasElement}) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByTestId('text-field');

    await userEvent.type(textField, 'this is a test');

    await waitFor(() => expect(args.onInput).toHaveBeenCalled());
    await waitFor(() => expect((textField as HTMLInputElement).value).toBe('this is a test'));
  },
};