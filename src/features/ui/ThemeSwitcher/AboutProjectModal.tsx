import React, { useState } from 'react';
import Modal from '../../../shared/ui/Modal/Modal';
import Header from '../../../shared/ui/Modal/ModalHeader';
import Body from '../../../shared/ui/Modal/ModalBody';
import Footer from '../../../shared/ui/Modal/ModalFooter';
import styles from './AboutProjectModal.module.css';

const AboutProjectModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className={styles.btn} onClick={openModal}>О проекте</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Header>
          <h2>О проекте</h2>
        </Header>
        <Body>
          <p>SPA-приложение, React + TypeScript + RTK Query + Тема + Модальное окно.</p>
        </Body>
        <Footer>
          <button className={styles.btn} onClick={closeModal}>Закрыть</button>
        </Footer>
      </Modal>
    </>
  );
};
export default AboutProjectModal;