import IconButton from '../IconButton/';
import { ReactComponent as CrossIcon } from '../../utils/images/icons/cross.svg';
import styles from './DailyCalorieIntake.module.scss';

const DailyCalorieIntake = ({ onClose }) => {
  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="recommended-calorie-intake"
      aria-describedby="not-recommended-products"
    >
      <header>
        <IconButton
          onClick={onClose}
          className={styles.ButtonCloseModal}
          aria-label="button-close-modal"
        >
          <CrossIcon width="20" height="20" aria-hidden="true" />
        </IconButton>
        <h1 id="recommended-calorie-intake">
          Ваша рекомендуемая суточная норма калорий составляет
        </h1>
        <p>
          <span>2800</span> ккал
        </p>
      </header>

      <h2 id="not-recommended-products">
        Продукты, которые вам не рекомендуется употреблять
      </h2>
      <ol>
        <li>Мучные продукты</li>
        <li>Молоко</li>
        <li>Красное мясо</li>
        <li>Копчености</li>
      </ol>
      <footer>
        <button type="button" aria-label="button-to-lose-weight">
          Начать худеть
        </button>
      </footer>
    </section>
  );
};

export default DailyCalorieIntake;

/* <IconButton onClick={onClose} className={styles.ButtonCloseModal}>
        <CrossIcon width="20" height="20" />
      </IconButton> */
/* <button
        type="button"
        onClick={onClose}
        className={styles.ButtonCloseModal}
      >
        <svg onClick={onClose} width="20" height="20">
          <use href={`${sprite}#cross`}></use>
        </svg>
      </button> */
