import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  error?: string | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  helperText,
  error,
}) => {
  return (
    <div>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        margin="normal"
        fullWidth
        type="text"
        helperText={helperText}
      />
    </div>
  );
};

export default InputField;
