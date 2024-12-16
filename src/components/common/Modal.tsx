import { X } from '@phosphor-icons/react';
import React from 'react';
import Button from './Button';

interface Props {
  title: string;
  description: string;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  footer?: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ title, description, isOpen, onConfirm, onClose, footer = false, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-75 z-50 transition-opacity duration-300 px-4 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      onClick={isOpen ? onClose : undefined}
    >
      <div
        className={`bg-white rounded-xl shadow-lg p-5 sm:p-6 w-[500px] transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="modal-body mb-6">{children}</div>
        {footer && (
          <div className="modal-footer gap-2 flex justify-end *:flex-1 sm:*:flex-[0_0_auto]">
            <Button onClick={onClose} className='w-28 !bg-black/10 !text-dark'>
              No
            </Button>

            <Button onClick={onConfirm} className='w-28 bg-red-500'>
              Yes
            </Button>
          </div>
        )}
        <button className="close-button absolute top-1 right-1 p-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <X weight='bold' size={16} className='text-black' />
        </button>
      </div>
    </div>
  );
};

export default Modal;
