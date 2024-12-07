import { PencilSimple } from '@phosphor-icons/react';
import React from 'react';
import Button from '../common/Button';

interface Props {
  className?: string;
  title: string;
  content?: string;
  color?: string
}

const Note: React.FC<Props> = ({ className, title, content, color = "#fec971" }) => {

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`${className ? className : ""} flex flex-col gap-3 rounded-xl p-5 pb-3 min-h-[150px] sm:min-h-[200px]`}
    >
      <div className='flex-1'>
        <h2 className='font-semibold text-base sm:text-lg mb-2 opacity-80 leading-tight'>{title}</h2>
        <p className='opacity-70 text-sm sm:text-base'>{content}</p>
      </div>

      <div className='flex items-center justify-between'>
        <p className='text-sm opacity-80'>Nov 21,2020</p>
        <Button>
          <PencilSimple weight='fill' />
        </Button>
      </div>
    </div>
  )
}

export default Note