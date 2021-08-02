import Button from '../Button';
import { ReactComponent as CrossIcon } from '../../utils/images/icons/cross.svg';
import { ReactComponent as ArrowIcon } from '../../utils/images/icons/arrowBack.svg';

import dailyRateSelector from "../../redux/dailyRate/dailyRateSelector";
import { useMedia } from 'react-use';
import {  useSelector } from 'react-redux';

import styles from './DailyCalorieIntake.module.scss';
const DailyCalorieIntake = ({ onClose }) => {
  const isWide = useMedia('(min-width: 624px)');

  const getCalories = useSelector(dailyRateSelector.getCalories);
  const products = useSelector(dailyRateSelector.getProducts);
  console.log(products);
  return (
    <section
      className={styles.MainSectionModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="recommended-calorie-intake"
      aria-describedby="not-recommended-products"
    >
      <header>
        {isWide ? (
          <Button
            onClick={onClose}
            className={styles.ButtonCloseModal}
            aria-label="button-close-modal"
          >
            <CrossIcon width="20" height="20" aria-hidden="true" />
          </Button>
        ) : (
          <div className={styles.ButtonCloseWrapper}>
            <Button
              onClick={onClose}
              className={styles.ButtonCloseModalMobile}
              aria-label="button-close-modal"
            >
              <ArrowIcon width="15" height="8" aria-hidden="true" />
            </Button>
          </div>
        )}

        <h1 className={styles.TitleMainSection} id="recommended-calorie-intake">
          Ваша рекомендуемая суточная норма калорий составляет
        </h1>
        <p className={styles.PharagraphCalorieCounting}>
          <span>{getCalories}</span> ккал
        </p>
      </header>
      <section className={styles.SectionNotReccomendProduts}>
        <h2 className={styles.SectionSubtitle} id="not-recommended-products">
          Продукты, которые вам <br /> не рекомендуется употреблять
        </h2>
        <ol className={styles.ProductsList}>
          {products.map(item => (
					<li key={item}>
              <p>{item[0].toUpperCase() + item.slice(1)}</p>
					</li>
				))}
        </ol>
      </section>
      <footer className={styles.FooterModal}>
        <Button
          className={styles.ButtonRegistration}
          aria-label="button-registration"
        >
          Начать худеть
        </Button>
      </footer>
    </section>
  );
};

export default DailyCalorieIntake;
