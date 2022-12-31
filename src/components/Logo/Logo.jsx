import s from './Logo.module.css';
import logoIcon from '../../assets/icons/logoWhite.jpg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoIcon} alt={'logo'} className={s.logo} width={60} height={60} />
    </Link>
  );
};

export default Logo;
