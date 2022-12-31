import s from './HomePage.module.css';
import SwipeOrDie from '../../assets/images/home/SwipeOrDie.png';
import GrabTheKey from '../../assets/images/home/GrabTheKey.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrows } from 'assets/icons/arrow.svg';
import Container from 'components/Container/Container';
import AdditionalSection from 'components/AdditionalSection/AdditionalSection';
import useWindowDimensions from 'helpers/hooks/useWindowDimensions';

const HomePage = () => {
  const { width } = useWindowDimensions();
  return (
    <main className={s.main}>
      <Container>
        <h1 className={s.title}>Play Kirko Games and have the most fun!</h1>
        {width < 768 ? (
          <div className={s.container}>
            <Link to="/games/swipe-or-die" className={s.imageBlock}>
              <img src={SwipeOrDie} alt={'game Swipe Or Die'} className={s.image} />
              <p className={s.gameSwipe}>Swipe Or Die</p>
            </Link>

            <Link to="/games/grab-the-key" className={s.imageBlock}>
              <img src={GrabTheKey} alt={'game Grab The Key'} className={s.image} />
              <p className={s.game}>Grab The Key</p>
            </Link>
          </div>
        ) : (
          <div className={s.container}>
            <Link to="/games/swipe-or-die" className={s.imageBlock}>
              <img src={SwipeOrDie} alt={'game Swipe Or Die'} className={s.image} />
            </Link>
            <div className={s.centralBlock}>
              <Link to="/games/grab-the-key">
                <p className={s.game}>Grab The Key</p>
              </Link>
              <Arrows className={s.icon} />
              <Link to="/games/swipe-or-die">
                <p className={s.gameSwipe}>Swipe Or Die</p>
              </Link>
            </div>
            <Link to="/games/grab-the-key" className={s.imageBlock}>
              <img src={GrabTheKey} alt={'game Grab The Key'} className={s.image} />
            </Link>
          </div>
        )}
      </Container>
      <AdditionalSection />
    </main>
  );
};

export default HomePage;
