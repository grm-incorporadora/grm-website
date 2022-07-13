import { TextField } from '@mui/material';

interface InputProps {
  ref: React.RefObject<HTMLInputElement> | null;
  type?: React.HTMLInputTypeAttribute;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
}

export const Input = ({
  type,
  placeholder,
  disabled,
  required,
  label,
  ref,
}: InputProps) => {
  return (
    <TextField
      required={required === undefined ? true : required}
      id="filled-required"
      label={label}
      variant="filled"
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      InputProps={{ inputProps: { ref, 'aria-label': label } }}
    />
  );
};
