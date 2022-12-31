import s from './App.module.css';
import PagesRoutes from 'PagesRoutes/PagesRoutes';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleNavMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const body = document.querySelector('#root');
    if (menuActive) {
      disableBodyScroll(body);
    } else {
      enableBodyScroll(body);
    }
  }, [menuActive]);

  return (
    <>
      <Header menuActive={menuActive} toggleNavMenu={toggleNavMenu} />
      {menuActive && <BurgerMenu toggleNavMenu={toggleNavMenu} />}
      <div className={s.container}>
        <PagesRoutes />
      </div>
      <Footer />
    </>
  );
};

export default App;
