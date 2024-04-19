import { html } from 'lit';
import './text-field.css';

export const TextField = ({ label, size, onChange, onInput, onBlur }) => html`
  <label class="storybook-label">${label ?? 'Label'}</label>
  <input
    type="text"
    class=${['storybook-text-field', `storybook-text-field--${size || 'medium'}`].join(' ')}
    data-testid="text-field"
    @change=${onChange}
    @input=${onInput}
    @blur=${onBlur}
  />
`;
