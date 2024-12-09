import { Check, PencilSimple } from '@phosphor-icons/react';
import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

interface Props {
  className?: string;
  title: string;
  content?: string;
  color?: string;
}

const Note: React.FC<Props> = ({ className, title, content = "", color = "#fec971" }) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`${className ? className : ""} animate-zoom-in flex flex-col gap-3 rounded-xl p-5 pb-3 min-h-[150px] sm:min-h-[200px]`}
    >
      <div className="flex-1">
        {editMode ? (
          <Input
            type="text"
            autoFocus={true}
            initialValue={title}
            placeholder="Edit title"
            onChange={(value) => console.log(value)}
            className="p-0 font-semibold text-base sm:text-lg mb-2 opacity-80"
          />
        ) : (
          <h2 onDoubleClick={handleEditMode} className="font-semibold text-base sm:text-lg mb-2 opacity-80 leading-tight">{title}</h2>
        )}

        {editMode ? (
          <Input
            type="text"
            initialValue={content}
            placeholder="Edit content"
            onChange={(value) => console.log(value)}
            className="p-0 opacity-70 text-sm sm:text-base "
          />
        ) : (
          <p className="opacity-70 text-sm sm:text-base">{content}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm opacity-80">Nov 21,2020</p>
        <Button onClick={handleEditMode}>
          {
            editMode ? <Check weight="bold" /> : <PencilSimple weight="fill" />
          }
        </Button>
      </div>
    </div>
  );
};

export default Note;
