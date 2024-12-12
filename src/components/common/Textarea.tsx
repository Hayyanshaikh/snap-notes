import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

interface TextareaProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
  disabled?: boolean;
  initialValue?: string;
  autoFocus?: boolean;
  textareaClassName?: string;
  minRows?: number;
  maxRows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder = "",
  onChange,
  name,
  className,
  disabled = false,
  initialValue = "",
  autoFocus = false,
  textareaClassName,
  minRows = 3,
  maxRows,
}) => {
  const [text, setText] = useState<string>(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
    adjustHeight();
  }, [autoFocus]);

  const handleTextareaChange = (value: string) => {
    setText(value);
    adjustHeight();
    if (onChange) {
      onChange(value);
    }
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;

      // Handle maxRows if provided
      if (maxRows) {
        const lineHeight = parseFloat(getComputedStyle(textareaRef.current).lineHeight || "16");
        const maxHeight = maxRows * lineHeight;
        textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
      }
    }
  };

  return (
    <div className={`textarea-container ${className || ''}`}>
      <textarea
        ref={textareaRef}
        placeholder={placeholder}
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleTextareaChange(e.target.value)}
        name={name}
        disabled={disabled}
        className={`${textareaClassName ? textareaClassName : ''} placeholder-black/50 w-full leading-tight bg-transparent outline-none border-none`}
        rows={minRows}
        style={{ resize: "none", overflow: "hidden" }}
      />
    </div>
  );
};

export default Textarea;
