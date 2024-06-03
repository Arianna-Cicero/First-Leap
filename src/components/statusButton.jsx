import React from 'react';

function StatusButton({ isOpen, toggleStatus }) {
  return (
    <button className={`toggle-button ${isOpen ? 'open' : 'close'}`} onClick={toggleStatus}>
      {isOpen ? 'Open' : 'Close'}
    </button>
  );
}

export default StatusButton;
