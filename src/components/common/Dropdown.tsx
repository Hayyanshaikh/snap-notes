import React from 'react'
import Button from './Button';
import { DotsThreeVertical } from '@phosphor-icons/react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  onSelect?: (value: string) => void;
  options: Option[];
  className?: string;
  dropdownClassName?: string;
  labelClassName?: string;
  label?: string | React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ onSelect, options, className, dropdownClassName, labelClassName, label }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <Button className={`${labelClassName} !p-0 bg-transparent`}>
        {label || <DotsThreeVertical size={20} />}
      </Button>
      <div className={`${dropdownClassName ? dropdownClassName : ""} flex flex-col items-start`}>
        {
          options && options?.length > 0 && options?.map((option: Option, index: number) => (
            <button onClick={() => onSelect && onSelect(option.value)} key={index}>{option?.label}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Dropdown