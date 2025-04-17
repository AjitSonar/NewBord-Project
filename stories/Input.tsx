// Input.tsx
import React from 'react';
import { Input as Input11 } from '@heroui/react'; // Adjust the import based on your library structure


type InputProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  value = '',
  placeholder = 'Enter text',
  disabled = false,
  size = 'medium',
  onChange,
}) => {
  const sizeClass = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-3 text-base',
    large: 'py-3 px-4 text-lg',
  }[size];

  return (
    <Input11
      className={`border rounded ${sizeClass}`}
      style={{ backgroundColor:"white" }}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
