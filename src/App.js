import Modal from './components/Modal/Modal';
import Container from './components/Container';
import DailyCalorieIntake from './components/DailyCalorieIntake';
import { useState } from 'react';

const App = () => {
  const [modal, showModal] = useState(false);

  const toggleModal = () => {
    showModal(prevState => !prevState);
  };

  return (
    <Container>
      <button type="button" onClick={toggleModal}>
        Открыть модалку
      </button>
      {modal && (
        <Modal onClose={toggleModal}>
          <DailyCalorieIntake onClose={toggleModal} />
        </Modal>
      )}
    </Container>
  );
};

export default App;
