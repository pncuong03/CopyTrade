import React from 'react';

export const CommingSoon = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg flex space-x-4"
      >
        
        <div className="flex flex-col w-full">
          <p className="text-right text-gray-500 cursor-pointer" onClick={onClose}>
            X
          </p>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary-100 hanover">Comming soon</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

