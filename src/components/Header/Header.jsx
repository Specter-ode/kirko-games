import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { menuItems } from './menuItems';

const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

const Header = () => {
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
        </div>
        <nav className={s.nav}>
          <ul className={s.menu}>{elements}</ul>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
