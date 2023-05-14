import s from './HomePage.module.css';
import math512 from '../../assets/images/home/math512.jpg';
import swipeOrDie from '../../assets/images/home/SwipeOrDie.png';
import grabTheKey from '../../assets/images/home/GrabTheKey.png';
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';
import AdditionalSection from 'components/AdditionalSection/AdditionalSection';

const HomePage = () => {
  return (
    <main className={s.main}>
      <Container>
        <h1 className={s.title}>Play Kirko Games and have the most fun!</h1>
        <ul className={s.container}>
          <li className={s.imageItem}>
            <Link to="/games/math512" className={s.imageBlock}>
              <img src={math512} alt={'game 512'} className={s.image} />
              <h2 className={s.game}>512</h2>
            </Link>
          </li>
          <li className={s.imageItem}>

            <Link to="/games/swipe-or-die" className={s.imageBlock}>
              <img src={swipeOrDie} alt={'game Swipe Or Die'} className={s.image} />
              <h2 className={s.game}>Swipe Or Die</h2>
            </Link>
          </li>
          <li className={s.imageItem}>
            {' '}
            <Link to="/games/grab-the-key" className={s.imageBlock}>
              <img src={grabTheKey} alt={'game Grab The Key'} className={s.image} />
              <h2 className={s.game}>Grab The Key</h2>
            </Link>
          </li>
        </ul>
      </Container>
      <AdditionalSection />
    </main>
  );
};

export default HomePage;
