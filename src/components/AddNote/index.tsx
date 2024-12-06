import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { Plus } from '@phosphor-icons/react';
import { COLORS } from '../../utils/constant';

const AddNote: React.FC = () => {
  const [showColors, setShowColors] = useState<boolean>(false);
  const [visibleColors, setVisibleColors] = useState<number>(0);

  const handleShowColors = () => {
    setShowColors(!showColors);
    if (!showColors) setVisibleColors(0);
  };

  useEffect(() => {
    if (showColors) {
      COLORS.forEach((_, index) => {
        setTimeout(() => setVisibleColors((prev) => prev + 1), index * 80);
      });
    }
  }, [showColors]);

  return (
    <>
      <Button onClick={handleShowColors} className="!p-0 h-9 w-9 mb-6">
        <Plus size={20} weight="bold" />
      </Button>
      {showColors && (
        <div className="flex flex-col gap-4">
          {COLORS?.map((color: string, index: number) => (
            <Button
              className={`!bg-transparent !p-0 h-4 aspect-square rounded-full overflow-hidden transition-transform duration-300 ${visibleColors > index ? 'scale-100' : 'scale-0'
                }`}
              key={index}
            >
              <span
                className="h-full w-full"
                style={{ backgroundColor: color }}
              ></span>
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default AddNote;
