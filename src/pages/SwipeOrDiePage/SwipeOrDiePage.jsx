import s from './SwipeOrDiePage.module.css';
import gameImage from '../../assets/images/games/swipeRules1.png';
import firstGameRule from '../../assets/images/games/swipeRules2.png';
import secondGameRule from '../../assets/images/games/swipeRules3.png';
import Container from 'components/Container/Container';
import useWindowDimensions from 'helpers/hooks/useWindowDimensions';
import { ReactComponent as BackArrow } from 'assets/icons/backArrow.svg';
import { useNavigate } from 'react-router-dom';

const SwipeOrDiePage = () => {
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
            <h2 className={s.titleMobile}>Swipe or Die </h2>
            <p className={s.title}>(cooming soon)</p>
          </>
        ) : (
          <h2 className={s.title}>Swipe or Die (cooming soon)</h2>
        )}
        <div className={s.container}>
          <img src={gameImage} alt={'game Swipe Or Die'} className={s.image} />
          <div className={s.descriptionBlock}>
            <h3 className={s.descriptionTitle}>About game</h3>
            <p className={s.text}>
              A game in which you fight in online mode against another living person who is also on planet Earth! Drag
              it to your side and blow it up with a bomb! If it doesn't work, then use your superpowers to pour oil on
              your opponent, strike with lightning, freeze, direct the wind against him, or simply confuse him by
              changing the direction of the swipe!
            </p>
            <p className={s.text}>
              The best players rise to the next level, where they will already fight against equal opponents, good luck!
            </p>
          </div>
        </div>
        {width > 768 ? (
          <div className={s.container}>
            <div className={s.descriptionBlock}>
              <img src={firstGameRule} alt={'game Swipe Or Die'} className={s.image} />
              <img src={secondGameRule} alt={'game Swipe Or Die'} className={s.image} />
            </div>
            <div className={s.descriptionBlock}>
              <h3 className={s.descriptionTitle}>Rules of the game</h3>
              <p className={s.text}>Do you want to start winning in Swipe or Die ?</p>
              <p className={s.text}>Then get acquainted with the main rules of the game.</p>
              <p className={s.text}>
                As soon as the timer starts you will have 1 minute to determine the strongest among you two!
              </p>
              <p className={s.text}>
                Start immediately swiping in your direction and drag your opponent to the bomb, do not forget to use the
                superpower located at the bottom of your screen. As soon as the super-ability begins to affect your
                opponent, start swiping and pulling to your side as soon as possible.
              </p>
              <p className={s.text}>The super-powers only last a few seconds, so make the most of this, good luck!</p>
              <p className={s.text}>
                After a victory, you get cups and coins, after a defeat, you lose them. The number of cups determines at
                what level you are, the more cups you have, the higher the level of players against whom you will fight.
                The world to which you are will depend on the level. Remember, the one who swipes faster is the one who
                moves on, good luck!
              </p>
              <p className={s.maintext}>Remember, the one who swipes faster is the one who moves on, good luck!</p>
            </div>
          </div>
        ) : (
          <>
            <div className={s.container}>
              <img src={firstGameRule} alt={'game Swipe Or Die'} className={s.image} />
              <div className={s.descriptionBlock}>
                <h3 className={s.descriptionTitle}>Rules of the game</h3>
                <p className={s.text}>Do you want to start winning in Swipe or Die ?</p>
                <p className={s.text}>Then get acquainted with the main rules of the game.</p>
                <p className={s.text}>
                  As soon as the timer starts you will have 1 minute to determine the strongest among you two!
                </p>
                <p className={s.text}>
                  Start immediately swiping in your direction and drag your opponent to the bomb, do not forget to use
                  the superpower located at the bottom of your screen. As soon as the super-ability begins to affect
                  your opponent, start swiping and pulling to your side as soon as possible.
                </p>
              </div>
            </div>
            <div className={s.container}>
              <img src={secondGameRule} alt={'game Swipe Or Die'} className={s.image} />
              <div className={s.descriptionBlock}>
                <p className={s.text}>The super-powers only last a few seconds, so make the most of this, good luck!</p>
                <p className={s.text}>
                  After a victory, you get cups and coins, after a defeat, you lose them. The number of cups determines
                  at what level you are, the more cups you have, the higher the level of players against whom you will
                  fight. The world to which you are will depend on the level. Remember, the one who swipes faster is the
                  one who moves on, good luck!
                </p>
                <p className={s.maintext}>Remember, the one who swipes faster is the one who moves on, good luck!</p>
              </div>
            </div>
          </>
        )}
      </Container>
    </main>
  );
};

export default SwipeOrDiePage;
