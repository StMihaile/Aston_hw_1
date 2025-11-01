import React, { useState } from 'react';
import Modal from '../../../shared/ui/Modal/Modal';

const AboutProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} style={{ marginLeft: '10px', padding: '8px' }}>Модальное окно</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>О проекте</h2>
        <p>Проекта на React + TypeScript с реализацией модального окна и темы.</p>
      </Modal>
    </>
  );
};

export default AboutProjectModal;