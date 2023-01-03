import s from './Math512Page.module.css';

import firstGameRule from '../../assets/images/games/mathRules1.png';
import secondGameRule from '../../assets/images/games/mathRules2.png';
import Container from 'components/Container/Container';
import useWindowDimensions from 'helpers/hooks/useWindowDimensions';
import { ReactComponent as BackArrow } from 'assets/icons/backArrow.svg';
import { useNavigate } from 'react-router-dom';

const Math512Page = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <main className={s.main}>
      <Container>
        <button className={s.backBtn} type="button" onClick={goBack}>
          <BackArrow className={s.icon} />
        </button>
        <h2 className={s.title}>512</h2>
        {width > 768 ? (
          <div className={s.container}>
            <div className={s.descriptionBlock}>
              <img src={firstGameRule} alt={'game 512'} className={s.image} />
              <img src={secondGameRule} alt={'game 512'} className={s.image} />
            </div>
            <div className={s.descriptionBlock}>
              <h3 className={s.descriptionTitle}>Rules of the game</h3>
              <p className={s.text}>
                In this game, you will immerse yourself in the world of the initial stage of development of logical
                thinking and training your brain. In the game you have a limited number of number swaps, which you can
                see in the upper left corner of main screen, from the start you are given 5 swaps.
              </p>
              <p className={s.text}>
                The numbers can be moved vertically horizontally as every move will cost you one swap, as described in
                the first paragraph of the tutorial.
              </p>
              <p className={s.text}>
                The essence of the game is to find a solution to addition and subtraction by spending the minimum number
                of swaps. In order to add or subtract you need to have 3 digits in a row vertically or horizontally, if
                you find such a solution, you need to move your first and second numbers to the third and you will earn
                one swap, as described in the second and third paragraphs of the tutorial.
              </p>

              <p className={s.text}>
                You have a hint button on the main screen which look like light. In the hint screen you will be able to
                watch an advertisement for which you will receive an equation in the center of your main game screen
                consisting of numbers 2 , 4 , 6 and use these numbers in the order convenient for you , which will help
                you continue the game and improve your result , as well as if the equation is clearly solved, you will
                exactly earn one swap and get a chance to countinue to play and make the best score!
              </p>

              <p className={s.maintext}>Hope you will enjoy our game. Good luck to rich the best score !</p>
            </div>
          </div>
        ) : (
          <>
            <div className={s.container}>
              <img src={firstGameRule} alt={'game 512'} className={s.image} />
              <div className={s.descriptionBlock}>
                <h3 className={s.descriptionTitle}>Rules of the game</h3>
                <p className={s.text}>
                  In this game, you will immerse yourself in the world of the initial stage of development of logical
                  thinking and training your brain. In the game you have a limited number of number swaps, which you can
                  see in the upper left corner of main screen, from the start you are given 5 swaps.
                </p>
                <p className={s.text}>
                  The numbers can be moved vertically horizontally as every move will cost you one swap, as described in
                  the first paragraph of the tutorial.
                </p>
                <p className={s.text}>
                  The essence of the game is to find a solution to addition and subtraction by spending the minimum
                  number of swaps. In order to add or subtract you need to have 3 digits in a row vertically or
                  horizontally, if you find such a solution, you need to move your first and second numbers to the third
                  and you will earn one swap, as described in the second and third paragraphs of the tutorial.
                </p>
              </div>
            </div>
            <div className={s.container}>
              <img src={secondGameRule} alt={'game 512'} className={s.image} />
              <div className={s.descriptionBlock}>
                <p className={s.text}>
                  You have a hint button on the main screen which look like light. In the hint screen you will be able
                  to watch an advertisement for which you will receive an equation in the center of your main game
                  screen consisting of numbers 2 , 4 , 6 and use these numbers in the order convenient for you , which
                  will help you continue the game and improve your result , as well as if the equation is clearly
                  solved, you will exactly earn one swap and get a chance to countinue to play and make the best score!
                </p>

                <p className={s.maintext}>Hope you will enjoy our game. Good luck to rich the best score !</p>
              </div>
            </div>
          </>
        )}
      </Container>
    </main>
  );
};

export default Math512Page;
