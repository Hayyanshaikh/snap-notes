import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 border-4 border-dashed border-black rounded-full duration-[4s] animate-spin"></div>
      </div>
    </div>
  );
}

export default Loading;
