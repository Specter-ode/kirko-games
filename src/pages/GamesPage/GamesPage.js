import s from './GamesPage.module.css';
import gameImage from '../../assets/images/games/game.png';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';

const GamesPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <div className={s.container}>
          <Link to="/games/swipe-or-die" className={s.imageBlock}>
            <img src={gameImage} alt={'game Swipe Or Die'} className={s.image} />
            <p className={s.text}>“Swipe Or Die” (how to play?)</p>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default GamesPage;
