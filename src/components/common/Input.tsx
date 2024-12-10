import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
  disabled?: boolean;
  initialValue?: string;
  autoFocus?: boolean;
  inputClassName?: string
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  onChange,
  name,
  className,
  disabled = false,
  initialValue = "",
  autoFocus = false,
  inputClassName
}) => {
  const [text, setText] = useState<string>(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [autoFocus]);

  const handleInputChange = (value: string) => {
    setText(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={`input-container ${className || ''}`}>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
        name={name}
        disabled={disabled}
        autoFocus={autoFocus}
        className={`${inputClassName ? inputClassName : ""} w-full leading-tight bg-transparent outline-none border-none`}
      />
    </div>
  );
};

export default Input;
