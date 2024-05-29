import type { Meta, StoryObj } from '@storybook/vue3';

import MoneyAmount from '../components/MoneyAmount.vue';

const meta = {
  title: 'MoneyAmount',
  component: MoneyAmount,
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'number', description: 'Number given must be an entire number, no comma, no dot. It will be formatted automatically' },
    currency: { control: 'text', description: 'Currency used to formatted the amount given' },
    isFractionated: { control: 'boolean', defaultValue: true, description: 'Defines whether the amount given is a fractionnal number' },
    hasColors: { control: 'boolean', defaultValue: true, description: 'Defines whether the number shown has color depending if it is positive (green), negative (red) or 0 (grey)' },
    locale: { control: 'text', defaultValue: null, description: 'Defines the locale for the number. User locale by default' },
    minimumFractionDigits: { control: 'number', default: 0, description: 'Defines how much number there is after the comma' },
  },
  args: {
    isFractionated: true,
    hasColors: true,
    minimumFractionDigits: 0,
  },
} satisfies Meta<typeof MoneyAmount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const USDAmount: Story = {
  args: {
    amount: 4284,
    currency: 'USD',
    locale: 'en-US',
  },
};

export const CADAmount: Story = {
  args: {
    amount: 4284,
    currency: 'CAD',
    locale: 'fr-CA',
  }
};

export const JPYAmount = {
  args: {
    amount: 4284,
    currency: 'JPY',
    locale: 'en-US',
  }
};

export const CADAmountNotFractionatedWithMinimumFractionDigits2: Story = {
  args: {
    amount: 4284,
    currency: 'CAD',
    locale: 'fr-CA',
    isFractionated: false,
    minimumFractionDigits: 2,
  }
};

export const USDNegative: Story = {
  args: {
    amount: -4284,
    currency: 'USD',
    locale: 'en-US',
  }
};

export const CADZero: Story = {
  args: {
    amount: 0,
    currency: 'USD',
    locale: 'en-US',
  }
};

export const USDNegativeWithoutColor: Story = {
  args: {
    amount: -4284,
    currency: 'USD',
    locale: 'en-US',
  }
};

export const WithoutCurrency: Story = {
  args: {
    amount: 4284,
    currency: '',
    locale: 'fr-CA',
  }
};