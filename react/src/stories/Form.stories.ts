import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { Button } from './Button';
import { Form, FormProps } from './Form';
import { TextField } from './TextField';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Form',
  component: Form,
  tags: ['autodocs'],
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
  args: {
    onClick: fn(),
    onChange: fn(),
    onInput: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FillForm = {
  play: async ({ args, canvasElement }: { args: FormProps, canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement);
    const textFields = canvas.getAllByTestId('text-field');

    await userEvent.type(textFields[0], 'John');
    await userEvent.type(textFields[1], 'Doe');
    await userEvent.type(textFields[2], 'john_doe@gmail.com');

    await userEvent.click(canvas.getByTestId('btn'));

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};