import { Check, PencilSimple, Trash } from '@phosphor-icons/react';
import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import useNoteStore from '../../stores/useNoteStore';
import Dropdown from '../common/Dropdown';
import { COLORS } from '../../utils/constant';

interface Props {
  className?: string;
  title: string;
  id: string;
  content?: string;
  color?: string;
  date?: string;
}

const Note: React.FC<Props> = ({ className, id, date, title, content = "", color = "#fec971" }) => {
  const { editNote, deleteNote } = useNoteStore((state: any) => state);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [note, setNote] = useState({ title, content });

  const handleAction = (value: string) => {
    if (value === "edit") {
      setEditMode(!editMode);
    } else if (value === "delete") {
      deleteNote(id)
    }
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

  const handleSetColor = (color: string) => {
    setNote(prevNote => ({
      ...prevNote,
      color: color
    }));
    editNote(id, { ...note, color });
  }

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`${className ? className : ""} animate-zoom-in flex flex-col gap-3 rounded-xl p-5 pb-3 min-h-[200px] flex-[0_0_300px]`}
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
          <h2 onDoubleClick={() => setEditMode(!editMode)} className="font-semibold text-base sm:text-lg mb-2 opacity-80 leading-tight">{title}</h2>
        )}

        {editMode ? (
          <Textarea
            initialValue={content}
            placeholder="Edit content"
            onChange={(value) => handleChange("content", value)}
            className="!p-0 opacity-70 text-sm sm:text-base"
          />
        ) : (
          <p className="opacity-70 !leading-tight text-sm sm:text-base">{content}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs opacity-80">{date}</p>
        {
          editMode ? (
            <Button onClick={() => handleSave(id)}>
              <Check weight="bold" />
            </Button>
          ) : (
            <Dropdown
              options={[
                {
                  label: (
                    <div className='grid grid-cols-3 gap-y-3 justify-items-center'>
                      {
                        COLORS?.map((color: string, index: number) => (
                          <Button
                            key={index}
                            onClick={() => handleSetColor(color)}
                            className={`!bg-transparent !p-0 h-4 aspect-square rounded-full overflow-hidden`}
                            style={{
                              transitionDelay: `${index * 100}ms`,
                            }}
                          >
                            <span
                              className="h-full w-full"
                              style={{ backgroundColor: color }}
                            ></span>
                          </Button>
                        ))
                      }
                    </div>
                  ),
                  value: "",
                  className: "hover:!bg-transparent"
                },
                {
                  label: (
                    <div className='flex items-center gap-2'>
                      <PencilSimple size={15} weight="bold" />
                      <span>Edit</span>
                    </div>
                  ),
                  value: "edit"
                },
                {
                  label: (
                    <div className='flex items-center gap-2'>
                      <Trash size={15} weight="bold" />
                      <span>Delete</span>
                    </div>
                  ),
                  value: "delete",
                  className: "border-t hover:!bg-red-500 hover:text-white -mb-1.5"
                },
              ]}
              onSelect={(value) => {
                handleAction(value);
              }}
            />
          )
        }
      </div>

    </div>
  );
};

export default Note;