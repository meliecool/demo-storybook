import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { html } from 'lit';
import { TextField } from './TextField';

export default {
  title: 'TextField',
  tags: ['autodocs'],
  render: (args) => html`<div style="max-width: 200px;">${TextField(args)}</div>`,
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
};

export const Small = {
  args: {
    size: 'small'
  }
};

export const Default = {};

export const Large = {
  args: {
    size: 'large'
  }
};


export const fillTextField = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByTestId('text-field');

    await userEvent.type(textField, 'this is a test');

    await waitFor(() => expect(args.onInput).toHaveBeenCalled());
    await waitFor(() => expect(textField.value).toBe('this is a test'));
  },
};