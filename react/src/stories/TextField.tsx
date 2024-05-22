import './text-field.css';

export interface TextFieldProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  onChange?: () => void;
  onInput?: () => void;
  onBlur?: () => void;
  style?: any;
}

export const TextField = ({
  label,
  size,
  onChange,
  onInput,
  onBlur,
  style,
}: TextFieldProps) => (
  <div style={style}>
    <label className="storybook-label">{label ?? 'Label'}</label>
    <input
      type="text"
      className={['storybook-text-field', `storybook-text-field--${size || 'medium'}`].join(' ')}
      data-testid="text-field"
      onChange={onChange}
      onInput={onInput}
      onBlur={onBlur}
    />
  </div>
);
