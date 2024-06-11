import React from 'react';

interface Props {
    show: boolean;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ show, onClose}) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Some kinda modal title</h5>
                    </div>
                    <div className="modal-body">
                        <p className='modal-content'>This is modal content</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;