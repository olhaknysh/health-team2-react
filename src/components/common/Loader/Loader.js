import Loader from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loading = () => {
  return (
    <div className={s.container}>
      <Loader type="Puff" color="#FFFFFF" height={200} width={200} />
      <h2 className={s.heading}>Скоро мы всё покажем</h2>
    </div>
  );
};

export default Loading;