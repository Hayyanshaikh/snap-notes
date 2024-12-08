import { PencilSimple } from '@phosphor-icons/react';
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
  const [editedTitle, setEditedTitle] = useState<string>(title);
  const [editedContent, setEditedContent] = useState<string>(content);

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
            initialValue={editedTitle}
            placeholder="Edit title"
            onChange={(value) => setEditedTitle(value)}
            className="p-0 font-semibold text-base sm:text-lg mb-2 opacity-80"
          />
        ) : (
          <h2 className="font-semibold text-base sm:text-lg mb-2 opacity-80 leading-tight">{editedTitle}</h2>
        )}

        {editMode ? (
          <Input
            type="text"
            initialValue={editedContent}
            placeholder="Edit content"
            onChange={(value) => setEditedContent(value)}
            className="p-0 opacity-70 text-sm sm:text-base "
          />
        ) : (
          <p className="opacity-70 text-sm sm:text-base">{editedContent}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm opacity-80">Nov 21,2020</p>
        <Button onClick={handleEditMode}>
          <PencilSimple weight="fill" />
        </Button>
      </div>
    </div>
  );
};

export default Note;
