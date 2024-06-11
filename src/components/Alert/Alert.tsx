import React from 'react';

interface Props {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  const alertClass = `alert alert-${type}`;

  return (
    <div className={alertClass} role="alert">
      <div>{children}</div>
      {onDismiss && (
        <button type="button" className="close" onClick={onDismiss}>
          <span>X</span>
        </button>
      )}
    </div>
  );
};

export default Alert;