import { Check, PencilSimple } from '@phosphor-icons/react';
import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import useNoteStore from '../../stores/useNoteStore';
import Dropdown from '../common/Dropdown';

interface Props {
  className?: string;
  title: string;
  id: string;
  content?: string;
  color?: string;
  date?: string;
}

const Note: React.FC<Props> = ({ className, id, date, title, content = "", color = "#fec971" }) => {
  const editNote = useNoteStore((state: any) => state.editNote);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [note, setNote] = useState({ title, content });

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = (id: string) => {
    editNote(id, note);
    setEditMode(false);
  }

  const handleChange = (field: "title" | "content", value: string) => {
    setNote((prevNote) => ({
      ...prevNote,
      [field]: value
    }));
  }

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`${className ? className : ""} animate-zoom-in flex flex-col gap-3 rounded-xl p-5 pb-3 min-h-[200px]`}
    >
      <div className="flex-1">
        {editMode ? (
          <Input
            type="text"
            autoFocus={true}
            initialValue={title}
            placeholder="Edit title"
            onChange={(value) => handleChange("title", value)}
            className="p-0 font-semibold text-base sm:text-lg mb-2 opacity-80"
          />
        ) : (
          <h2 onDoubleClick={handleEditMode} className="font-semibold text-base sm:text-lg mb-2 opacity-80 leading-tight">{title}</h2>
        )}

        {editMode ? (
          <Textarea
            initialValue={content}
            placeholder="Edit content"
            textareaClassName="leading-tight"
            onChange={(value) => handleChange("content", value)}
            className="!p-0 opacity-70 text-sm sm:text-base "
          />
        ) : (
          <p className="opacity-70 text-sm sm:text-base">{content}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm opacity-80">{date}</p>
        <Button onClick={() => editMode ? handleSave(id) : handleEditMode()}>
          {
            editMode ? <Check weight="bold" /> : <PencilSimple weight="bold" />
          }
        </Button>
      </div>
      <Dropdown
        // label="Dropdown"
        options={[
          { label: "option 1", value: "option1" },
          { label: "option 2", value: "option2" },
        ]}
        onSelect={(value: string) => console.log(value)}
      />
    </div>
  );
};

export default Note;
