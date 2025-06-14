import React from 'react';

interface ConfirmButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      className="w-full py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg mt-6 shadow-lg transition-all duration-300 disabled:bg-pink-800 disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      Confirmar
    </button>
  );
};

export default ConfirmButton; 