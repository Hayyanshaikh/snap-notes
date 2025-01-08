import { Check, PencilSimple, Trash } from '@phosphor-icons/react';
import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import useNoteStore from '../../stores/useNoteStore';
import Modal from '../common/Modal';
import Dropdown from '../common/Dropdown';

interface Props {
  className?: string;
  title: string;
  id: string;
  content?: string;
  date?: string;
}

const Note: React.FC<Props> = ({ className, id, date, title, content = "" }) => {
  const { editNote, deleteNote } = useNoteStore((state: any) => state);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [note, setNote] = useState({ title, content });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAction = (value: string) => {
    if (value === "edit") {
      setEditMode(!editMode);
    } else if (value === "delete") {
      setIsModalOpen(true);
    }
  };

  const handleSave = (id: string) => {
    editNote(id, note);
    setEditMode(false);
  };

  const handleChange = (field: "title" | "content", value: string) => {
    setNote((prevNote) => ({
      ...prevNote,
      [field]: value,
    }));
  };

  const handleDelete = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      deleteNote(id);
    }, 100);
  };

  return (
    <div
      className={`${className ? className : ""} bg-gray-200/75 dark:bg-light transition-all dark:text-white animate-zoom-in flex flex-col gap-3 rounded-md p-5 pb-3 min-h-[200px] flex-[0_0_300px]`}
    >
      <div className="flex-1">
        {editMode ? (
          <Input
            type="text"
            autoFocus={true}
            initialValue={title}
            placeholder="Edit title"
            onChange={(value) => handleChange("title", value)}
            className="p-0 font-medium text-base sm:text-lg mb-2 opacity-80"
          />
        ) : (
          <h2
            onDoubleClick={() => setEditMode(!editMode)}
            className="font-medium text-base sm:text-lg mb-2 opacity-80 leading-tight"
          >
            {title}
          </h2>
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
        {editMode ? (
          <Button className='!bg-darker !rounded-md aspect-square !p-0 h-6' onClick={() => handleSave(id)}>
            <Check weight="bold" size={14} />
          </Button>
        ) : (
          <Dropdown
            options={[
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
                className: "hover:!bg-red-500 hover:text-white"
              },
            ]}
            onSelect={(value) => {
              handleAction(value);
            }}
          />
        )}
      </div>

      <Modal
        title="Delete Item"
        description="Are you sure you want to delete this item?"
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onClose={() => setIsModalOpen(false)}
        footer={true}
      />
    </div>
  );
};

export default Note;
