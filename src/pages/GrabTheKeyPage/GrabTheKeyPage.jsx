import s from './GrabTheKeyPage.module.css';
import grabImage from '../../assets/images/games/astro.png';
import Container from 'components/Container/Container';

const GrabTheKeyPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <h2 className={s.title}>Grab the key</h2>
        <div className={s.container}>
          <img src={grabImage} alt={'game Grab the key'} className={s.image} />
          <div className={s.descriptionBlock}>
            <h3 className={s.descriptionTitle}>About game</h3>
            <p className={s.text}>
              Network online horror game where you will be divided into 2 teams, about 10 people will take part in the
              game. We cannot give more specific information now, since the data is classified. The game will captivate
              you with shocking action from which you can not tear yourself away! The game is in early stages of
              development and will be released a little later.
            </p>
            <p className={s.maintext}>But the pleasure that you get from the game is worth waiting for the release.</p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default GrabTheKeyPage;
