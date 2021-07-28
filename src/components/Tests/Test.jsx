import { useSelector } from 'react-redux';
import Loader from '../common/Loader'; // RUS
import { authSelectors } from '../../redux/auth'; // RUS

const Test = () => {
  const loading = useSelector(authSelectors.isLoading)
  return <div>
    {loading && <Loader />}
  </div>
}

export default Test;