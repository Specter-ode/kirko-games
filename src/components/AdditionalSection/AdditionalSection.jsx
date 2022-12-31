import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';
import s from './AdditionalSection.module.css';

const AdditionalSection = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.block}>
          <h2 className={s.title}>Games</h2>
          <p className={s.text}>
            Our dream is to create games where you can play with your friends,
            <br /> compete on the battlefield and have the most fun.
          </p>
          <p>
            <Link to="/games" className={s.link}>
              SEE GAMES
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AdditionalSection;
