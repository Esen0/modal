import React from 'react';

interface Props {
    show: boolean;
    onClick: () => void;
}



const Backdrop: React.FC<Props> = ({show, onClick}) => {
    
    return (

        <div
          className="modal-backdrop show"
          style={{display: show ? 'block' : 'none'}}
          onClick={onClick}
        />
    
      );
}

export default Backdrop