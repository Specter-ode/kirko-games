import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';
import { menuItems } from './menuItems';
import Logo from 'components/Logo/Logo';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as AppStoreIcon } from 'assets/icons/appstore.svg';
import { ReactComponent as InstagramHoverIcon } from 'assets/icons/instagramHover.svg';
import { useState } from 'react';
const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

const Footer = () => {
  const [hover, setHover] = useState(false);
  const elements = menuItems.map(({ id, to, text }) => (
    <li className={s.menu__item} key={id}>
      <NavLink to={to} className={getLinkClassName}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <Container>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.socialBlock}>
            <h3 className={s.title}>Follow us on</h3>
            <ul className={s.socialList}>
              <li
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                <a href="https://instagram.com/swipe_or_die?igshid=147enuo1kwux3">
                  {hover ? (
                    <InstagramHoverIcon className={s.instagramHoverIcon} />
                  ) : (
                    <InstagramIcon className={s.icon} />
                  )}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/GamesKirko">
                  <TwitterIcon className={s.twitterIcon} />
                </a>
              </li>
            </ul>
          </div>

          <AppStoreIcon className={s.appstoreIcon} />
        </div>
        <ul className={s.menu}>{elements}</ul>
        <div className={s.container}>
          <address className={s.addressBlock}>
            <p className={s.address}>KIRKO GAMES </p>
            <p className={s.address}>919 NORTH MARKET STREET</p>
            <p className={s.address}>19801 Wilmington</p>
            <p className={s.address}>USA</p>
          </address>

          <div className={s.block}>
            <Logo />
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
