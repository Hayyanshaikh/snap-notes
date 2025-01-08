import React, { useState, useEffect } from 'react'
import Button from './Button';
import { DotsThreeVertical } from '@phosphor-icons/react';

interface Option {
  label: string | React.ReactNode;
  value: string;
  className?: string;
}

interface Props {
  onSelect?: (value: string) => void;
  options: Option[];
  className?: string;
  dropdownClassName?: string;
  labelClassName?: string;
  groupTitle?: string;
  label?: string | React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ onSelect, options, className, dropdownClassName, labelClassName, label, groupTitle }) => {
  const [activeOptions, setActiveOptions] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.dropdown-container')) {
        setActiveOptions(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`${className ? className : ""} relative inline-block self-start dropdown-container`}>
      <Button className={`${labelClassName} h-6 !bg-transparent !p-0`} onClick={() => setActiveOptions(!activeOptions)}>
        {label || <DotsThreeVertical size={20} weight='bold' />}
      </Button>
      <div className={`${dropdownClassName ? dropdownClassName : ""} absolute min-w-36 bg-white shadow-lg rounded-md py-2 flex flex-col items-start transition ease-in-out duration-[100ms] origin-bottom-right bottom-full right-0 mb-2 overflow-hidden z-10 ${activeOptions ? "scale-100" : "scale-0"}`}>
        {
          groupTitle && <span className='text-xs my-1 px-4 text-black/50'>{groupTitle}</span>
        }
        {
          options && options?.length > 0 && options?.map((option: Option, index: number) => (
            <button
              className={`${option.className ? option.className : ""} px-4 py-2 sm:py-1.5 text-xs sm:text-sm capitalize text-dark hover:bg-black/10 w-full text-left transition-all`}
              onClick={() => {
                onSelect && onSelect(option.value);
                setActiveOptions(false);
              }}
              key={index}
            >{option?.label}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Dropdown;
