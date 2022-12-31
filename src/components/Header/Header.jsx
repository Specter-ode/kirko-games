import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import useWindowDimensions from 'helpers/hooks/useWindowDimensions';
import { ReactComponent as Burger } from 'assets/icons/burger.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { menuItems } from './menuItems';

const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

const Header = ({ menuActive, toggleNavMenu }) => {
  const { width } = useWindowDimensions();

  const elements = menuItems.map(({ id, to, text }) => (
    <li className={s.menu__item} key={id}>
      <NavLink to={to} className={getLinkClassName}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <Container>
      <header className={s.header}>
        <div className={s.block}>
          <Logo />
        </div>{' '}
        <nav className={s.nav}>
          <ul className={s.menu}>{elements}</ul>
        </nav>
        {width < 768 && (
          <button type="button" className={s.burgerBtn} onClick={toggleNavMenu}>
            {menuActive ? <Close /> : <Burger />}
          </button>
        )}
      </header>
    </Container>
  );
};

export default Header;
