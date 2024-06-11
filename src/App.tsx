import React, {useState} from 'react';
import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [showWarningAlert, setShowWarningAlert] = useState(true);
  const closeWarningAlert = () => setShowWarningAlert(false);

  return (
    <div className="container">
        <button className="btn btn-primary mt-5 mb-5" onClick={openModal}>
          Modal
        </button>

        <Backdrop show={showModal} onClick={closeModal} />

        <Modal show={showModal} onClose={closeModal} title="Some kinda modal title">
          <p>This is modal content</p>
        </Modal>

        {showWarningAlert && (
        <Alert type="warning" onDismiss={closeWarningAlert}>
          This is a warning type alert
        </Alert>
        )}
        <Alert type="success">
          This is a success type alert
        </Alert>
    </div>
  )
}

export default App
