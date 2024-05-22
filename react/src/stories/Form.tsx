import './form.css';

import { Button } from './Button';
import { TextField } from './TextField';

export interface FormProps {
  primary?: boolean
  backgroundColor?: string | null;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
  onChange?: () => void;
  onInput?: () => void;
  onBlur?: () => void;
}

export const Form = ({ primary, backgroundColor = null, size, label, onClick, onChange, onInput, onBlur }: FormProps) => {
  return (
    <>
      <TextField
        label="Nom"
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
        style={{ marginBottom: 20 }}
      />

      <TextField
        label="Prénom"
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
        style={{ marginBottom: 20 }}
      />

      <TextField
        label="Courriel"
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
        style={{ marginBottom: 20 }}
      />

      <Button
        primary={primary}
        background-color={backgroundColor}
        size={size}
        data-testid="btn"
        onClick={onClick}
        label="Soumettre"
      />
    </>
  );
};
