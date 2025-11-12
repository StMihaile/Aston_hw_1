import React, { useState } from 'react';
import Modal from '../../../shared/ui/Modal/Modal';
import Header from '../../../shared/ui/Modal/ModalHeader';
import Body from '../../../shared/ui/Modal/ModalBody';
import Footer from '../../../shared/ui/Modal/ModalFooter';
const AboutProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} style={{ marginLeft: '10px', padding: '8px' }}>Модальное окно</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Header>
          <h2>О проекте</h2>
        </Header>
        <Body>
          <p>Проекта на React + TypeScript с реализацией модального окна и темы.</p>
        </Body>
        <Footer>
          <button onClick={closeModal}>Закрыть</button>
        </Footer>
      </Modal>
    </>
  );
};

export default AboutProjectModal;
