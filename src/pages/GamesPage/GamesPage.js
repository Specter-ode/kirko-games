import s from './GamesPage.module.css';
import math512Image from '../../assets/images/games/math512Game.png';
import swipeImage from '../../assets/images/games/swipeGame.png';
import grabImage from '../../assets/images/games/grabGame.png';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';

const GamesPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <div className={s.container}>
          <Link to="/games/math512" className={s.imageBlock}>
            <img src={math512Image} alt={'game Math512'} className={s.image} />
            <p className={s.text}>“Math512” (how to play?)</p>
          </Link>
          <Link to="/games/swipe-or-die" className={s.imageBlock}>
            <img src={swipeImage} alt={'game Swipe Or Die'} className={s.image} />
            <p className={s.text}>“Swipe Or Die” (how to play?)</p>
          </Link>
          <Link to="/games/grab-the-key" className={s.imageBlock}>
            <img src={grabImage} alt={'game Grab the key'} className={s.image} />
            <p className={s.text}>“Grab The Key” (how to play?)</p>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default GamesPage;
