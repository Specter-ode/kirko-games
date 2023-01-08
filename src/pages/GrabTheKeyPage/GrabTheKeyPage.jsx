import s from './GrabTheKeyPage.module.css';
import grabImage from '../../assets/images/games/grabGame.png';
import Container from 'components/Container/Container';
import { ReactComponent as BackArrow } from 'assets/icons/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from 'helpers/hooks/useWindowDimensions';

const GrabTheKeyPage = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <main className={s.main}>
      <Container>
        <button className={s.backBtn} type="button" onClick={goBack}>
          <BackArrow className={s.icon} />
        </button>
        {width < 768 ? (
          <>
            <h2 className={s.titleMobile}>Grab the key </h2>
            <p className={s.title}>(coming soon)</p>
          </>
        ) : (
          <h2 className={s.title}>Grab the key (coming soon)</h2>
        )}
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
